import { APP_NAME } from "@/lib/constants";

const Footer = () => {
    const currentYear = new Date().getFullYear();

  return (<footer className="border-t">
    <div className="wrapper px-20 flex-center py-5">
        {currentYear} &copy; {APP_NAME}. All rights reserved.
    </div>

  </footer>

  )
};
export default Footer;