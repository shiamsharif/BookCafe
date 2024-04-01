import PropTypes from "prop-types";

const Blog = ({ blog }) => {
  const {
    Title,
    Cover,
    Author_Name,
    Author_Image,
    Reading_Time,
    Posted_Date,
    Hashtags,
  } = blog;

  return (
    <div>
      <img src={Cover} alt="" />
      <div className="flex justify-between">
        <div className="flex ">
          <img className="w-14" src={Author_Image} alt="" />
          <div className="ml-6">
            <h3 className="text-xl text-blue-500 font-bold">{Author_Name}</h3>
            <p>{Posted_Date}</p>
          </div>
        </div>
        <div>
          <span>{Reading_Time} min read</span>
        </div>
      </div>
      <h2 className="text-4xl">{Title}</h2>
      <p className="text-gray-700">
        {Hashtags.map((hash, idx) => (
          <span key={idx}>
            <a>#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
