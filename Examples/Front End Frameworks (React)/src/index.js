import React from 'react';
import { render } from 'react-dom';
import { Home, Mine, Search } from './screens/index';

const route = (WrappedComponent, routes) => {
    return class extends React.Component {
        render() {
            const ComponentForPathname = routes[this.props.pathname];
            return (
                <WrappedComponent>
                    <ComponentForPathname {...this.props} />
                </WrappedComponent>
            )
        }
    }
}
const Root = (props) =>
    <div>
        {props.children}
    </div>

const Router = route(Root, {
    "/": Home,
    "/search": Search,
    "/mine": Mine
});

let pathname = window.location.pathname;

render(<Router pathname={pathname} />, document.getElementById('root'));

window.addEventListener("popstate",
    () => pathname = window.location.pathname
);