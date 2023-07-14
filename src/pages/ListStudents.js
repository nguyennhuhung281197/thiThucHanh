import {useEffect, useState} from "react";
import axios from "axios";
import {Link, Outlet, Route, Routes, useNavigate} from "react-router-dom";
import Swal from "sweetalert2";

export default function ListStudents() {
    const navigate = useNavigate();
    const [list, setList] = useState([])
    const [search, setSearch] = useState('');
    useEffect(() => {
        axios.get('http://localhost:3001/tuors').then(res => {

            setList(res.data);
        })
    }, [])

    const remove = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete('http://localhost:3001/tuors/' + id).then(() => {
                    setList(list.filter(s => s.id !== id))
                })
            }
        })

    }

    const handleSearchChange = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value);
    };

    const filteredList = list.filter((item) => {
        return  item.title.toLowerCase().includes(search.toLowerCase());
    });
    console.log(filteredList)


    const detail = (id) => {
        console.log(id)
        axios.get('http://localhost:3001/tuors/' + id).then(
            (response) => {
                const detail = response.data
                console.log(detail);
                navigate('detail/' + id,
                    {
                        state: {
                            detail: detail
                        }
                    });
            });
    };


    return (

        <>

            <h1>Tour</h1>
            <Link to={'/create'}>
                <button>Create</button>
            </Link>
            <input type="text" value={search} onInput={handleSearchChange} placeholder="Search..." />
            <table border={'1px'}>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Email</th>
                </tr>
                {filteredList.map((item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>{item.description}</td>
                        <td><Link to={'edit/' + item.id}>
                            <button>Edit</button>
                        </Link></td>
                        <td>
                            <button onClick={() => remove(item.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={() => detail(item.id)}>Detail</button>
                        </td>
                    </tr>

                ))}

            </table>
        </>
    )

}