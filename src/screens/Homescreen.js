import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pizza } from "../components/Pizza";
import { getAllPizzas } from "../actions/PizzaActions";
import Loading from "../components/Loading";
import Error from "../components/Error";

export const Homescreen = () => {
  const dispatch = useDispatch();

  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);

  const { pizzas, error, loading } = pizzasstate;

  useEffect(() => {
    dispatch(getAllPizzas());
  }, []);

  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
          <Error error="Something Went Wrong" />
        ) : (
          pizzas.map((pizza) => {
            return (
              <div className="col-md-4">
                <div>
                  <Pizza pizza={pizza} />
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};
