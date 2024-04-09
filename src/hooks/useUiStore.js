import { onCloseDateModal, onOpenDateModal } from '../store/ui/uiSlice';
import { useDispatch, useSelector } from "react-redux"


export const useUiStore = () => {

    const dispatch = useDispatch()
    const { isDateModalOpen} = useSelector( state => state.ui );
    //console.log("holaa", isDateModalOpen )


    const openDateModal = () =>{
        dispatch( onOpenDateModal() )
    }

    const closeDateModal = () =>{
        dispatch( onCloseDateModal() )
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal()
    }

    return{
        //propiedades
        isDateModalOpen,

        
        //Métodos
        openDateModal,
        closeDateModal,
        toggleDateModal,
    }
}