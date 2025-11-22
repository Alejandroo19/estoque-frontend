import { useEffect, useState, useRef } from "react";
import type { Produto, ProdutoPayload } from "../../hooks/useProdutos";
import * as S from "./styles";
import { useCreateProduto } from "../../hooks/useCreateProduto";
import { useUpdateProduto } from "../../hooks/useUdateProduto";
import { useCategorias } from "../../hooks/useCategorias";
import { Toast } from "primereact/toast";
import { formatCurrency, unformatCurrency } from "../../utils/formatPrice";
import axios from "axios";

type ProductModalProps = {
  isVisible: boolean;
  onHide: () => void;
  productToEdit?: Produto | null;
};

export const ProductModal = ({
  isVisible,
  onHide,
  productToEdit,
}: ProductModalProps) => {
  const createMutation = useCreateProduto();
  const updateMutation = useUpdateProduto();
  const { data: categorias } = useCategorias();
  const toast = useRef<Toast>(null);

  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoria, setCategoria] = useState<number | null>(null);
  const [quantidadeMinima, setQuantidadeMinima] = useState<number>(0);
  const [quantidadeMaxima, setQuantidadeMaxima] = useState<number>(0);

  useEffect(() => {
    if (productToEdit) {
      setNome(productToEdit.nome ?? "");

      const precoSeguro =
        typeof productToEdit.precoUnitario === "number"
          ? productToEdit.precoUnitario.toString()
          : "";

      setPreco(precoSeguro);

      const categoriaCorrespondente = categorias?.find(
        (cat) =>
          cat.id === productToEdit.categoria?.id ||
          cat.nome === productToEdit.categoria?.nome
      );

      setCategoria(categoriaCorrespondente?.id ?? null);
      setQuantidadeMinima(productToEdit.quantidadeMinima ?? 0);
      setQuantidadeMaxima(productToEdit.quantidadeMaxima ?? 0);
    } else {
      setNome("");
      setPreco("");
      setCategoria(null);
      setQuantidadeMinima(0);
      setQuantidadeMaxima(0);
    }
  }, [productToEdit, categorias]);

  const handleSubmit = () => {
    const precoLimpo = preco.replace(",", ".");
    const precoNumber = parseFloat(precoLimpo);

    if (!nome.trim()) {
      toast.current?.show({
        severity: "error",
        summary: "Erro de Validação",
        detail: "O nome do produto é obrigatório.",
        life: 3000,
      });
      return;
    }

    if (isNaN(precoNumber) || precoNumber <= 0) {
      toast.current?.show({
        severity: "error",
        summary: "Erro de Validação",
        detail: "Por favor, insira um preço válido.",
        life: 3000,
      });
      return;
    }

    if (!categoria) {
      toast.current?.show({
        severity: "error",
        summary: "Erro de Validação",
        detail: "Por favor, selecione uma categoria.",
        life: 3000,
      });
      return;
    }

    const produtoPayload: ProdutoPayload = {
      id: productToEdit?.id ?? undefined,
      nome,
      precoUnitario: precoNumber,
      unidade: "un",
      quantidadeEstoque: productToEdit?.quantidadeEstoque ?? 0,
      quantidadeMinima,
      quantidadeMaxima,
      categoria: categoria ? { id: categoria } : null,
    };

    if (productToEdit) {
      updateMutation.mutate(produtoPayload as Produto, {
        onSuccess: () => {
          toast.current?.show({
            severity: "success",
            summary: "Sucesso",
            detail: "Produto atualizado com sucesso!",
            life: 3000,
          });
          onHide();
        },
        onError: (error) => handleAxiosError(error),
      });
    } else {
      createMutation.mutate(produtoPayload, {
        onSuccess: () => {
          toast.current?.show({
            severity: "success",
            summary: "Sucesso",
            detail: "Produto cadastrado com sucesso!",
            life: 3000,
          });
          onHide();
        },
        onError: (error) => handleAxiosError(error),
      });
    }
  };

  const handleAxiosError = (error: unknown) => {
    let userMessage = "Erro ao salvar o produto.";

    if (axios.isAxiosError<{ message?: string }>(error)) {
      const apiMessage = error.response?.data?.message ?? "";

      if (apiMessage.includes("Duplicate entry")) {
        userMessage = "Já existe um produto com esse nome!";
      } else if (apiMessage.includes("constraint")) {
        userMessage = "Violação de integridade no banco de dados.";
      } else if (apiMessage.length > 0) {
        userMessage = apiMessage;
      }
    }

    toast.current?.show({
      severity: "error",
      summary: "Erro",
      detail: userMessage,
      life: 4000,
    });
  };

  return (
    <>
      <S.StyledToast ref={toast} />
      <S.StyledDialog
        header={productToEdit ? "Editar Produto" : "Cadastrar Produto"}
        visible={isVisible}
        onHide={onHide}
        draggable={false}
        style={{ width: "400px" }}
      >
        <S.FormContainer>
          <S.FieldGroup>
            <label htmlFor="nome">Nome</label>
            <S.StyledInput
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <label htmlFor="preco">Preço</label>
            <S.StyledInput
              id="preco"
              type="text"
              inputMode="numeric"
              value={formatCurrency(preco)}
              onChange={(e) => {
                const raw = e.target.value;
                const unformatted = unformatCurrency(raw);
                setPreco(unformatted);
              }}
              placeholder="R$ 0,00"
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <label htmlFor="categoria">Categoria</label>
            <S.StyledDropdown
              id="categoria"
              value={categoria}
              options={
                categorias?.map((cat) => ({
                  label: cat.nome,
                  value: cat.id,
                })) || []
              }
              onChange={(e) => setCategoria(e.value)}
              appendTo="self"
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <label htmlFor="quantidadeMinima">Quantidade Mínima</label>
            <S.StyledInput
              id="quantidadeMinima"
              type="number"
              inputMode="numeric"
              value={quantidadeMinima.toString()}
              onChange={(e) => setQuantidadeMinima(Number(e.target.value) || 0)}
              placeholder="0"
            />
          </S.FieldGroup>

          <S.FieldGroup>
            <label htmlFor="quantidadeMaxima">Quantidade Máxima</label>
            <S.StyledInput
              id="quantidadeMaxima"
              type="number"
              inputMode="numeric"
              value={quantidadeMaxima.toString()}
              onChange={(e) => setQuantidadeMaxima(Number(e.target.value) || 0)}
              placeholder="0"
            />
          </S.FieldGroup>

          <S.ButtonsWrapper>
            <S.StyledButton
              label={productToEdit ? "Salvar alterações" : "Cadastrar"}
              icon="pi pi-check"
              onClick={handleSubmit}
              loading={createMutation.isPending || updateMutation.isPending}
            />
          </S.ButtonsWrapper>
        </S.FormContainer>
      </S.StyledDialog>
    </>
  );
};
