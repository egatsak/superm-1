import React, { useState, useEffect } from "react";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import useFetch from "../../utils/useFetch";
import ProductDetailInfo from "./ProductDetailInfo";
import ProductDetailNutrition from "./ProductDetailNutrition";
import ProductDetailStorage from "./ProductDetailStorage";

export default function ProductDetails(props) {
  const [product, setProduct] = useState({});
  const { get } = useFetch("https://react-tutorial-demo.firebaseio.com/");
  const match = useRouteMatch();

  useEffect(() => {
    get(`productinfo/id${match.params.id}.json`)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => console.log("Could not load product details", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.params.id]);

  return (
    <div className="product-details-layout">
      <div>
        <h2>{product.name}</h2>
        <img
          src={product.image}
          width="125"
          height="125"
          className="product-details-image"
          alt={product.name}
        />
      </div>
      <div>
        <div className="tabs">
          <ul>
            <li>
              <NavLink exact activeClassName="tab-active" to={match.url}>
                Details
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="tab-active"
                to={match.url + "/nutrition"}
              >
                Nutrition
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                activeClassName="tab-active"
                to={match.url + "/storage"}
              >
                Storage
              </NavLink>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path={match.path}>
            <ProductDetailInfo product={product} />
          </Route>

          <Route path={match.path + "/nutrition"}>
            <ProductDetailNutrition nutrition={product.nutrition} />
          </Route>

          <Route path={match.path + "/storage"}>
            <ProductDetailStorage storage={product.storage} />
          </Route>
        </Switch>
      </div>
    </div>
  );
}
