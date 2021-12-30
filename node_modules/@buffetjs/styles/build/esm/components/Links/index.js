var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Links
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var Links = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: flex-end;\n  button {\n    background: transparent;\n    border: 0;\n    outline: 0;\n    color: ", ";\n    svg {\n      font-size: 10px;\n      color: ", ";\n    }\n  }\n"])), colors.blueTxt, colors.blueTxt);
export default Links;