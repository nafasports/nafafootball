import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useParams } from "react-router-dom";
import MatchInfoLayout from "../MatchInfos/MatchInfoLayout";

const MatchInfo = () => {
  const { id } = useParams();
  // const date = new Date();
  // console.log(date);
  const [poster, setPoster] = useState({});
  const [stand, setStand] = useState([]);
  const [filtered, setFiltered] = useState("");
  const [spanish, setSpanish] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get(`http://localhost:5000/api/match/${id}`);

      setPoster(data);
      // console.log(data);
      setLoading(false);
      setError(false);
      // const obj = Object.entries(data).map(([key, value]) => ({ key, value }));

      // console.log(obj);
      // const arr = [];
      // Object.keys(data).forEach((key) =>
      //   arr.push({ name: key, value: data[key] })
      // );
      // // console.log(arr[0].name, arr[0].value);
      // const result = Object.keys(data).map((poster) => data[poster]);

      // console.log(result);
      // const objectArray = Object.entries(data);

      // objectArray.forEach(([key, value]) => {
      //   console.log(key); // 'one'
      //   console.log(value); // 1
      // });
      //   localStorage.setItem("PostId", JSON.stringify(data));
    };

    fetchPosts();
  }, [id]);
  return (
    <MatchInfoLayout>
      <div>
        {poster?.gameInfos?.map((spain, index) => (
          <div key={index}>
            <div key={index}>
              <ListGroup>
                <ListGroup.Item>
                  {spain.possesionHome}
                  {spain.possesionAway}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {spain.firstGoalScorerHome}
                  {spain.firstGoalScorerAway}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {spain.secondGoalScorerHome}
                  {spain.secondGoalScorerAway}{" "}
                </ListGroup.Item>
                <ListGroup.Item>
                  {spain.ThirdGoalScorerHome}
                  {spain.ThirdGoalScorerAway}{" "}
                </ListGroup.Item>
              </ListGroup>
            </div>
          </div>
        ))}
      </div>
    </MatchInfoLayout>
  );
};

export default MatchInfo;
