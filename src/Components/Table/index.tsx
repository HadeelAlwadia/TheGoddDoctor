import { userInfo } from '../../storage'
import './Table.css'
import { FaEye } from "react-icons/fa";
import { AiTwotoneEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { useContext } from 'react';
import { AppContext } from '../../store';
import actions from '../../store/actions';
import { Iappointment } from '../../@types';

const Table = ({ data }: { data: Iappointment []}) => {
    const { dispatch } = useContext(AppContext)
    return (
      <>
           <table>
            <caption>
                Front-end web developer course 2021
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

                    {userInfo.role === 'doctor' ? <>
                        <th>view</th>
                        <th>edite</th>
                        <th>delete</th>

                    </>
                        : null}
                </tr>
            </thead>
            <tbody>
                {data.map((item: any, index: number) => <tr>

                    <th scope="row">{++index}</th>
                    <th scope="row">{item.fullName}</th>

                    <td>{item.age}</td>
                    <td>{item.mobileNumber}</td>
                    <td>{item.gander}</td>

                    <td>{item.date}</td>
                    <td>{item.time}</td>
                    {userInfo.role === 'doctor' ? <>
                        <td><FaEye color='blue' size={20} />
                        </td>
                        <td><AiTwotoneEdit color='green' size={20} />
                        </td>
                        <td><MdOutlineDelete color='red' size={20} onClick={() => dispatch(actions.deleteAppointment(item.id))} />
                        </td>
                    </> : null}

                </tr>
                )}
            </tbody>


        </table>

      </>
   
    )
}

export default Table
