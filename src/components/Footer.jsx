const Footer = () => {
  return (
    <footer className="bg-green-800 text-white py-6 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h4 className="text-lg font-bold">Tree Insights</h4>
          <p className="text-sm">&copy; 2023 All Rights Reserved</p>
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-gray-300">
            Facebook
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Twitter
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
