import { Badge, Divider, Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./layout.css";
import { useAppSelector } from "@/redux/hook";
import { GET_CART } from "@/redux/features/cart/cartSlice";
import { Toaster } from "sonner";
const { Content, Header, Footer, Sider } = Layout;

const MainLayout = () => {
  const { totalItems: totalCartItems } = useAppSelector(GET_CART);

  const location = useLocation();
  const sideBarItems = [
    {
      key: "home",
      label: <NavLink to="/">Home</NavLink>,
    },
    {
      key: "products",
      label: <NavLink to={`/products`}>Products</NavLink>,
    },
    {
      key: "about-us",
      label: <NavLink to={`/about-us`}>About Us</NavLink>,
    },
    {
      key: "contact-us",
      label: <NavLink to={`/contact-us`}>Contact Us</NavLink>,
    },
    {
      key: "dashboard",
      label: <NavLink to={`/dashboard`}>Dashboard</NavLink>,
    },
  ];
  const [selectedKeys, setSelectedKeys] = useState("/");
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    const handleBeforeUnload = (e:BeforeUnloadEvent) => {
      const confirmationMessage = "Are you sure you want to leave? Your cart data will be lost.";
      e.returnValue = confirmationMessage;
      return confirmationMessage;
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    if (location.pathname === "/") {
      setSelectedKeys("home");
    } else if (location.pathname === "/cart") {
      setSelectedKeys("");
    } else if (
      sideBarItems.find((item) => item.key === location.pathname.slice(1))
    ) {
      setSelectedKeys(location.pathname.slice(1));
    } else {
      setSelectedKeys("");
    }

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [location.pathname]);

  return (
    <Layout>
      <Header
        style={{
          backgroundColor: "#fefefe",
          position: "sticky",
          top: 0,
          zIndex: 10,
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "#001F3F",
          fontFamily: "Untitled Sans",
        }}
        className="border-[0.5px] border-zinc-200 pl-4 pr-8 py-4 md:px-8"
      >
        <button
          className="mr-4 text-2xl md:hidden block"
          onClick={() => setCollapsed(!collapsed)}
        >
          <div
            className={`w-6 mb-2 relative h-[3px] transition-all bg-custom-primary rounded-md ${
              collapsed ? "rotate-0 top-0" : "rotate-45 top-[3px]"
            }`}
          ></div>
          <div
            className={`w-6 h-[3px] relative transition-all bg-custom-primary rounded-md ${
              collapsed ? "rotate-0 top-0" : "-rotate-45 -top-[8px] "
            }`}
          ></div>
        </button>
        <Link
          to="/"
          className="demo-logo font-[600] md:text-[2rem] text-[1.5rem]"
        >
          KeyWizards
        </Link>
        <Menu
          className="hidden md:flex .nav-menu"
          mode="horizontal"
          selectedKeys={[selectedKeys]}
          items={sideBarItems}
          style={{
            marginLeft: "6rem",
            fontWeight: "600",
            fontSize: "1rem",
            background: "transparent",
            flex: 1,
            minWidth: 0,
          }}
        />
        <NavLink to="/cart" className="custom-navlink">
          <div
            style={{
              fontWeight: "500",
              fontSize: "1rem",
              fontFamily: "Untitled Sans",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="ml-4 md:block hidden">Your Cart</span>
            <Badge
              style={{
                border: "1.5px solid #001f3f",
                backgroundColor: "#fefefe",
                color: "#001f3f",
                fontFamily: "Untitled Sans",
                fontWeight: "500",
              }}
              count={totalCartItems}
              offset={[5, 2]}
              showZero
            >
              <div className="bg-white p-[8px] rounded-md">
                <FaCartShopping style={{ fontSize: "1.25rem" }} />{" "}
              </div>
            </Badge>
          </div>
        </NavLink>
      </Header>

      <Layout style={{ position: "relative" }}>
        <Sider
          className="md:hidden font-Untitled-Sans block z-50 max-w-[320px] w-[320px]"
          collapsible
          collapsed={collapsed}
          trigger={null}
          breakpoint="lg"
          collapsedWidth="0"
          width="100%"
          onCollapse={setCollapsed}
          style={{
            position: "fixed",
            height: "100vh",
            top: "65px",
            width: "100% !important",
            paddingTop: "1rem",
          }}
        >
          <div className="demo-logo-vertical" />
          <Menu
            onClick={() => setCollapsed(!collapsed)}
            theme="dark"
            mode="inline"
            selectedKeys={[selectedKeys]}
            items={sideBarItems}
            style={{
              paddingLeft: "14px",
              paddingRight: "14px",
            }}
          />
        </Sider>
        <Content>
          <Outlet></Outlet>
          <div className="fixed bottom-0 h-screen right-0">
            <Toaster
              richColors={true}
              duration={2000}
              visibleToasts={1}
              position={"bottom-right"}
            ></Toaster>
          </div>
        </Content>
      </Layout>

      <Footer
        style={{
          backgroundColor: "#001F3F",
          color: "#fefefe",
          fontFamily: "Untitled Sans",
        }}
        className="py-[4rem]"
      >
        <div className="flex md:flex-row flex-col md:gap-6 gap-10 justify-between">
          {/* logo and socials */}
          <div className=" max-w-64">
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: 600,
              }}
            >
              Key Wizards
            </h3>
            <span>
              A modern and user-friendly online store for mechanical keyboard
              enthusiasts.
            </span>
          </div>

          {/**links */}

          <div className="grid md:grid-cols-2 text-left gap-6 grid-cols-1">
            {/* col-2 */}
            <div>
              <h4 className="text-xl font-[500] mb-2">Quick Links</h4>
              <ul>
                <li>
                  <NavLink to="/products">Products</NavLink>
                </li>
                <li>
                  <NavLink to="/about-us">About Us</NavLink>
                </li>
                <li>
                  <NavLink to="/contact-us">Contact Us</NavLink>
                </li>
              </ul>
            </div>
            {/* col-3 */}
            <div>
              <h4 className="text-xl font-[500] mb-2">Contact Us</h4>
              <p>123 Street Name, City, Country</p>
              <p>Email: info@example.com</p>
              <p>Phone: +1234567890</p>
            </div>
          </div>
        </div>
        <Divider className="bg-zinc-500 my-12" />
        <p className="text-center">
          &copy; {new Date().getFullYear()} KeyWizards. All rights reserved.
        </p>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
