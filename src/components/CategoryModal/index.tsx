import { useEffect, useState } from "react";
import { useCreateCategoria } from "../../hooks/useCreateCategoria";
import { useUpdateCategoria } from "../../hooks/useUpdateCategoria";
import type { Categoria } from "../../hooks/useCategorias";
import { Toast } from 'primereact/toast';
import { useRef } from 'react';
import * as S from "./styles";

type CategoryModalProps = {
  isVisible: boolean;
  onHide: () => void;
  categoryToEdit?: Categoria | null;
};

export const CategoryModal = ({
  isVisible,
  onHide,
  categoryToEdit,
}: CategoryModalProps) => {
  const createMutation = useCreateCategoria();
  const updateMutation = useUpdateCategoria();
  const toast = useRef<Toast>(null);

  const [nome, setNome] = useState("");

  useEffect(() => {
    if (categoryToEdit) {
      setNome(categoryToEdit.nome || "");
    } else {
      setNome("");
    }
  }, [categoryToEdit]);

  const handleSubmit = () => {
    if (!nome.trim()) {
      toast.current?.show({
        severity: 'error',
        summary: 'Erro de Validação',
        detail: 'O nome da categoria é obrigatório.',
        life: 3000,
      });
      return;
    }

    if (categoryToEdit) {
      const categoriaAtualizada: Categoria = {
        id: categoryToEdit.id,
        nome,
        ...(categoryToEdit.tamanho !== undefined && { tamanho: categoryToEdit.tamanho }),
        ...(categoryToEdit.embalagem !== undefined && { embalagem: categoryToEdit.embalagem }),
      };

      updateMutation.mutate(categoriaAtualizada);
    } else {
      const novaCategoria: Omit<Categoria, 'id'> = {
        nome,
      };

      createMutation.mutate(novaCategoria);
    }

    onHide();
  };

  return (
    <>
      <S.StyledToast ref={toast} />
      <S.StyledDialog
        header={categoryToEdit ? "Editar Categoria" : "Cadastrar Categoria"}
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

          <S.ButtonsWrapper>
            <S.StyledButton
              label={categoryToEdit ? "Salvar Alterações" : "Cadastrar"}
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
