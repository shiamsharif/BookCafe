import profile from "../../assets/images/profile.png";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 mx-4 border-b-2">
      <h1 className="text-4xl font-bold">BookCafe</h1>

      {/* Use the imported image directly */}
      <img src={profile} alt="" />
    </div>
  );
};

export default Header;
