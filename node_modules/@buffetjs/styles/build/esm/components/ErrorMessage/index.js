var _templateObject;

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
 *
 * ErrorMessage
 *
 */
import styled from 'styled-components';
import colors from '../../assets/styles/colors';
var ErrorMessage = styled.p(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  /* stylelint-disable */\n  font-size: 1.3rem !important;\n  /* stylelint-enable */\n  color: ", ";\n"])), colors.darkOrange);
export default ErrorMessage;