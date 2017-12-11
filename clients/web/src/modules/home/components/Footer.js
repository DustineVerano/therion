import React, { PureComponent } from "react";
import { Layout } from "antd";

class Footer extends PureComponent {
	render() {
		return (
			<Layout.Footer id="home-footer">
				Copyright © 2017 Zoog Technologies, Inc
			</Layout.Footer>
		);
	}
}

Footer.propTypes = {
};

export default Footer;
