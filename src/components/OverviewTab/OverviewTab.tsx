import { useNavigate } from 'react-router-dom'
import GreenButton from '../buttons/GreenButton/GreenButton'
import RedButton from '../buttons/RedButton/RedButton'
import './OverviewTab.css'

const OverviewTab = () => {

    const navigate = useNavigate()

    const handleClickEdit = ()=>{
        navigate('/admin-edit-challenge')
    }
    
    const handleClickDelete = ()=>{
        if(confirm()){
            navigate('/admin-edit-challenge')
        }
    }

    return (
        <>
            <div className='OverviewTabStripe'>
                <div className="OverviewTabLeft">
                    <p>Overview</p>
                </div>
                <div className="OverviewTabRight">
                    <GreenButton onClick={()=>handleClickEdit()} text={'Edit'} />
                    <RedButton onClick={()=>handleClickDelete()} text={'Delete'} />
                </div>
            </div>
            <div className='OverviewTabTexts'>
                <div className="OverviewTabFluid">
                    <p>Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows.</p>
                    <p> An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model.</p>
                    <p>Your Task is to build an Image Classification Model using CNN that classifies to which class of weather  each image belongs to.</p>
                </div>
            </div>

        </>
    )
}

export default OverviewTab
