import React from 'react';
// REMOVER: Não precisamos mais importar diretamente Dialog e Button do primereact
// import { Button } from 'primereact/button';
// import { Dialog } from 'primereact/dialog'; 

// 1. IMPORTAR: Importe todos os seus componentes estilizados
import * as S from './styles'; // Assumindo que seu styles.ts está no mesmo diretório

type DeleteModalProps = {
    isVisible: boolean;
    onHide: () => void;
    onConfirm: () => void;
    itemName: string; // Ex: "o Produto 'Caderno'"
    isDeleting: boolean; // Para exibir o spinner de loading
};

export const DeleteModal = ({
    isVisible,
    onHide,
    onConfirm,
    itemName,
    isDeleting,
}: DeleteModalProps) => {


    return (
        // 2. SUBSTITUIR: Substituímos <Dialog> por S.StyledDialog
        <S.StyledDialog
            header="⚠️ Confirmar Exclusão"
            visible={isVisible}
            style={{ width: '400px' }} // Mantendo o width aqui para flexibilidade
            modal
            onHide={onHide}
            draggable={false}
        >
            {/* 2. SUBSTITUIR: Substituímos o <div> com estilo inline por S.DeleteMessageContainer */}
            <S.DeleteMessageContainer>
                Você tem certeza que deseja <strong>DELETAR</strong> {itemName}?

                {/* Usamos a classe "warning-text" definida no styles.ts */}
                <p className="warning-text">
                    Esta ação é irreversível.
                </p>
            </S.DeleteMessageContainer>
            <S.ButtonsWrapper>

                {/* Botão Cancelar */}
                {/* 2. SUBSTITUIR: Substituímos <Button> por S.StyledButton */}
                <S.StyledButton
                    label="Cancelar"
                    icon="pi pi-times"
                    onClick={onHide}
                    className="p-button-text" // Usamos a classe para o estilo de botão "texto"
                    disabled={isDeleting}
                />

                {/* Botão Confirmar/Deletar */}
                {/* 2. SUBSTITUIR: Substituímos <Button> por S.StyledButton */}
                <S.StyledButton
                    label="Deletar"
                    icon="pi pi-trash"
                    severity="danger" // Propriedade do PrimeReact que o styled component usa
                    onClick={onConfirm}
                    loading={isDeleting}
                    disabled={isDeleting}
                />
            </S.ButtonsWrapper>
        </S.StyledDialog>
    );
};