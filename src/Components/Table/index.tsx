import { userInfo } from '../../storage'
import './Table.css'
import { FaEye } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useContext } from 'react';
import { AppContext } from '../../store';
import actions from '../../store/actions';
import { Iappointment } from '../../@types';

interface Itable{
    data: Iappointment[],
    actionsFun: {
        handleOpenPopUp: () => void,
        handleChangeType: (type: string) => void,
        handleGetId: (appoId: string,patientId:string) => void
    }
}
const Table = ({ data, actionsFun }:Itable)=> {

    const { dispatch } = useContext(AppContext);
    
    return (
        <div style={{overflowX:'auto',width:'100%'}}>
            <table width={'100px'} >
                <caption>
                    all appointments for 2021 year
                </caption>
                <thead>
                    <tr>
                        <th scope="col">#</th>

                        <th scope="col">name</th>
                        <th scope="col">age </th>
                        <th scope="col">moblie</th>

                        <th scope="col">gander</th>
                        <th scope="col">date</th>
                        <th scope="col">time</th>
                        <td>status</td>

                        {userInfo.role === 'doctor' ? <>
                            <th>view</th>
                            <th>edite</th>
                            <th>delete</th>

                        </>
                            : null}
                            
                    </tr>
                </thead>
                <tbody>
                    { data.map((item: any, index: number) =>
                    
                        <tr>
                            <th scope="row">{++index}</th>
                            <th scope="row">{item.fullName}</th>
                            <td>{item.age}</td>
                            <td>{item.mobileNumber}</td>
                            <td>{item.gander}</td>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.status}</td>

                            {userInfo.role === 'doctor' ? <>
                                <td><FaEye color='blue' size={20} onClick={() => {
                                    actionsFun.handleOpenPopUp()
                                    actionsFun.handleGetId(item.id,item.pateintId)
                                    actionsFun.handleChangeType('view')

                                }
                                } />
                                </td>
                                <td><AiTwotoneEdit color='green' size={20} onClick={() => {
                                    actionsFun.handleOpenPopUp()
                                    actionsFun.handleGetId(item.id,item.pateintId)
                                    actionsFun.handleChangeType('edit')

                                }
                                } />
                                </td>
                                <td><MdOutlineDelete color='red' size={20} onClick={() => dispatch(actions.deleteAppointment(item.id,item.patientId))} />
                                </td>
                            </> : null}


                        </tr>
                    )}
                </tbody>


            </table>

        </div>

    )
}

export default Table
