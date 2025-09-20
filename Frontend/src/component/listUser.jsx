import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ReactPaginate from "react-paginate";


const ListUser = () => {
    const [personal, setPersonal] = useState([]);
    const [page, setPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [pages, setPages] = useState(0);
    const [rows, setRows] = useState(0);
    const [keyword, setKeyword] = useState("");
    const [query, setQuery] = useState("");
    const [message, setMessage] = useState("");

    const getPersonal = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/personal?search=${keyword}&page=${page}&limit=${limit}`);
        setPersonal(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalpages);
        setRows(response.data.totalrows);
      } catch (error) {
        console.error(error.message);
      }
    };

    useEffect(() => {
      getPersonal();
    }, [page, limit, keyword]);

    const handlePageClick = (data) => {
      setPage(data.selected);
      if (data.selected === 9) {
        setMessage("User Not Found? Try to Search Again");
      } else {
        setMessage("");
      }
    };

    const handleSearch = (e) => {
      e.preventDefault();
      setPage(0);
      setKeyword(query);
      setMessage("");
    };

 return (
  <div className="max-w-6xl mx-auto mt-5 px-4">
    <form onSubmit={handleSearch} className="mb-4">
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          placeholder="Search Users"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-full px-5 py-2 hover:bg-blue-600"
        >
          Search
        </button>
      </div>
    </form>

    <table className="table-auto w-full border border-gray-300 text-left">
      <thead className="bg-gray-100">
        <tr>
          <th className="px-3 py-2 border">Id</th>
          <th className="px-3 py-2 border">First Name</th>
          <th className="px-3 py-2 border">Last Name</th>
          <th className="px-3 py-2 border">Email</th>
          <th className="px-3 py-2 border">Gender</th>
          <th className="px-3 py-2 border">Ip Address</th>
        </tr>
      </thead>
      <tbody>
        {personal.map((item) => (
          <tr key={item.id} className="hover:bg-gray-50">
            <td className="px-3 py-2 border">{item.id}</td>
            <td className="px-3 py-2 border">{item.firs_name}</td>
            <td className="px-3 py-2 border">{item.last_name}</td>
            <td className="px-3 py-2 border">{item.email}</td>
            <td className="px-3 py-2 border">{item.gender}</td>
            <td className="px-3 py-2 border">{item.ip_address}</td>
          </tr>
        ))}
      </tbody>
    </table>

    <p className="mt-2 text-sm text-gray-600">
      Total Rows : {(+rows || 0).toLocaleString("en-US")}
      {" "}Page : {page + 1} of {pages}
    </p>

    {message && <p className="text-red-500">{message}</p>}

    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      breakLabel={"..."}
      pageCount={Math.ceil(10, pages)}     
      onPageChange={handlePageClick}
      containerClassName="flex justify-end gap-2 mt-4"
      pageLinkClassName="px-3 py-1 border rounded hover:bg-gray-100"
      previousLinkClassName="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
      nextLinkClassName="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
      activeLinkClassName="bg-blue-500 text-white"
      disabledLinkClassName="opacity-50 cursor-not-allowed"
    />
  </div>
 );

};

export default ListUser;