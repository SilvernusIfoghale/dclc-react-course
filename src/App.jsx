import React from "react";
import {
  Routes,
  Route,
  Link,
  useRoutes,
  NavLink,
  useLocation,
} from "react-router-dom";
import BookList from "./pages/BookList";
import Home from "./pages/Home";
import Books from "./pages/Books";
import NewBook from "./pages/NewBook";
import NotFound from "./pages/NotFound";
import BookLayout from "./BookLayout";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Form from "./component/Form";
import FormYup from "./component/FormYup";
import FormFormikYup from "./component/FormFormikYup";
import FormReactHookForm from "./component/FormReactHookForm";
import Counter from "./redux/features/counter/Counter";
import PostsList from "./redux/features/post/PostsList";

const App = () => {
  //defining route using javaScript
  // let element = useRoutes([
  //   { path: "/contact", element: <Contact /> },
  //   {
  //     path: "/about",
  //     element: <Books />,
  //   },
  // ]);
  // const location = useLocation();
  // console.log(location);
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "black" : "",
      textDecoration: "none",
    };
  };
  return (
    <>
      <nav className="bg-slate-200 py-4 flex-wrap">
        {/* {element} */}
        <ul className="flex gap-5   flex-wrap ">
          <li>
            <Link to="/">Home</Link>
            {/* <Link to="/" reloadDocument>Home</Link> 
            reloads the entire page when clicked
            */}
            {/* <Link to="/" replace>Home</Link>
            removes the page you're currently on from the history, so when you click page you don't go back to that page. i.e login page, when the user is login you properly don't want to bring the user page to the login page when they go backward.
            */}
          </li>
          <Link to="/form">Form</Link>
          <Link to="/counter">Redux-Counter</Link>
          <Link to="/form-yup">FormYup</Link>
          <Link to="/form-formik-yup">FormFormikYup</Link>
          <Link to="/react-hook-form">ReactHookForm</Link>
          <Link to="/post">Redux-Posts</Link>

          <li>
            <NavLink
              state="Hi, from state"
              to="/book"
              style={({ isActive }) => {
                return isActive ? { fontWeight: "bold" } : {};
              }}
            >
              Book List
            </NavLink>
            {/* <Link to="/book">Book List</Link> */}
          </li>
          <li>
            {/* <NavLink end to="/books" style={navLinkStyles}> 
            the 'end' stops the parent route from being active once the child component is clicked*/}
            <NavLink to="/books" style={navLinkStyles}>
              Books
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<Books />} />
          <Route path=":id" element={<Books />} />
          <Route path="newbook" element={<NewBook />} />
        </Route>
        <Route path="/book" element={<BookList />} />
        <Route path="/form" element={<Form />} />
        <Route path="/form-yup" element={<FormYup />} />
        <Route path="/form-formik-yup" element={<FormFormikYup />} />
        <Route path="/react-hook-form" element={<FormReactHookForm />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/post" element={<PostsList />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
