import React from "react";
import { useSearch } from "../../context/search";
import Layout from "./../components/Layout/Layout";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values] = useSearch();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {Array.isArray(values.results)
              ? `Found ${values.results.length} result(s)`
              : "No results found"}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {Array.isArray(values.results) &&
              values.results.map((p) => (
                <div className="card m-2" key={p._id} style={{ width: "18rem" }}>
                  <img
                    src={`/api/v1/product/product-photo/${p._id}`}
                    className="card-img-top"
                    alt={p.name}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{p.name}</h5>
                    <p className="card-text">
                      {p.description?.substring(0, 30)}...
                    </p>
                    <p className="card-text">$ {p.price}</p>
                    <button
                      className="btn btn-primary ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;
