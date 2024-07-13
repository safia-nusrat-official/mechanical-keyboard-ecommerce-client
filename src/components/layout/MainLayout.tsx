import { Divider, Layout, Menu } from "antd";
import { useEffect, useState } from "react";
import { FaBars, FaCartShopping } from "react-icons/fa6";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import "./layout.css";
const { Content, Header, Footer, Sider } = Layout;

const MainLayout = () => {
  const location = useLocation()
  const sideBarItems = [
    {
      key: "Home",
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
  const [selectedKeys, setSelectedKeys] = useState("/")
  const [collapsed, setCollapsed] = useState(true);

  useEffect(()=>{
    console.log(location.pathname)
    setSelectedKeys(location.pathname)
  }, [location.pathname])

  console.log([selectedKeys])
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
          fontFamily: "Untitled Sans"
        }}
        className="border-[0.5px] border-zinc-200"
      >
        <button
          className="mr-4 text-2xl md:hidden block"
          onClick={() => setCollapsed(!collapsed)}
        >
          <FaBars></FaBars>
        </button>
        <Link to="/" className="demo-logo font-[600] md:text-[2rem] text-[1.5rem]">
          KeyWizards
        </Link>
        <Menu
          className="hidden md:flex .nav-menu"
          mode="horizontal"
          defaultSelectedKeys={["Home"]}
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
        <NavLink to="/cart">
          <div
            style={{
              fontWeight: "500",
              fontSize: "1rem",
              fontFamily: "Untitled Sans",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span className="mr-4 md:block hidden">Your Cart</span>
            <FaCartShopping style={{ fontSize: "1.25rem" }} />
          </div>
        </NavLink>
      </Header>

      <Layout>
        <Sider
          className="md:hidden block"
          collapsible
          collapsed={collapsed}
          trigger={null}
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={setCollapsed}
        >
          <div className="demo-logo-vertical" />
          <Menu
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
