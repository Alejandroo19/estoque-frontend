import * as S from './styles'; 

type DeleteModalProps = {
    isVisible: boolean;
    onHide: () => void;
    onConfirm: () => void;
    itemName: string; 
    isDeleting: boolean;
};

export const DeleteModal = ({
    isVisible,
    onHide,
    onConfirm,
    itemName,
    isDeleting,
}: DeleteModalProps) => {


    return (
        <S.StyledDialog
            header="⚠️ Confirmar Exclusão"
            visible={isVisible}
            style={{ width: '400px' }} 
            modal
            onHide={onHide}
            draggable={false}
        >
            
            <S.DeleteMessageContainer>
                Você tem certeza que deseja <strong>DELETAR</strong> {itemName}?

               
                <p className="warning-text">
                    Esta ação é irreversível.
                </p>
            </S.DeleteMessageContainer>
            <S.ButtonsWrapper>

                <S.StyledButton
                    label="Cancelar"
                    icon="pi pi-times"
                    onClick={onHide}
                    className="p-button-text" 
                    disabled={isDeleting}
                />

                
                <S.StyledButton
                    label="Deletar"
                    icon="pi pi-trash"
                    severity="danger" 
                    onClick={onConfirm}
                    loading={isDeleting}
                    disabled={isDeleting}
                />
            </S.ButtonsWrapper>
        </S.StyledDialog>
    );
};