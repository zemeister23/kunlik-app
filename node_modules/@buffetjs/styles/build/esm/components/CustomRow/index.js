var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * CustomRow
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var CustomRow = styled.tr(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  background-color: transparent;\n  cursor: pointer;\n  &:hover {\n    background-color: ", ";\n  }\n"])), colors.greyHover);
export default CustomRow;