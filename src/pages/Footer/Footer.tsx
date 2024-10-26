import Container from "../../components/ui/container";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gray-800 text-white py-6">
        <Container>
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <ul className="flex space-x-4 mb-4 md:mb-0">
              <li>
                <a href="#" className="hover:text-gray-400">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>
            </ul>
            <div className="mb-4 md:mb-0">
              <h5 className="text-lg text-center font-bold">SPORTIFY HUB</h5>
              <p className="text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400">
                Facebook
              </a>
              <a href="#" className="hover:text-gray-400">
                Twitter
              </a>
              <a href="#" className="hover:text-gray-400">
                Instagram
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Footer;
