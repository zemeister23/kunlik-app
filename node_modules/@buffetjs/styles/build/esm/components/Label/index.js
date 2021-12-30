var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * Label
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
import sizes from '../../assets/styles/sizes';
var Label = styled.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  font-weight: ", ";\n  font-size: ", ";\n  color: ", ";\n"])), sizes.fontWeight.semiBold, sizes.input.fontSize, colors.blueTxt);
export default Label;