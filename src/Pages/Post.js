import React from 'react';
import { useLocation, useParams } from 'react-router';

const Post = ({ match }) => {
  const { id } = useParams();
  const query = new URLSearchParams(useLocation().search);
  // console.log(useLocation());

  return (
    <div className="container">
      <h2 className="text-center text-primary">
        <div>match ID :{match.params.id}</div>
      </h2>
      <div>
        <h4 className="text-center text-primary">Params ID :{id}</h4>
        <h5 className="text-center text-success">
          {/* using : http://abcde/xyz?first='xxxx'&last='yyyyyy' 
          ex : http://localhost:3000/Post/999?first=aaaaa&last=bbbbb
          */}
          {query.get('first')}-{query.get('last')}
        </h5>
      </div>
    </div>
  );
};

export default Post;
