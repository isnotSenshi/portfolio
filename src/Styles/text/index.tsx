import styled from 'styled-components'

export interface CustomTextInterface {
	id?: string
	text?: string | any
	color?: string
	size?: string
	align?: string
	$margin?: string
	fontWeight?: string
	padding?: string
	bgColor?: string
	$styleString?: string
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
	onMouseOver?: () => void
	onMouseOut?: () => void
	children?: React.ReactNode
}

export const CustomText = styled('div')<CustomTextInterface>`
	box-sizing: border-box;
	display: flex;
	font-weight: ${(props) => props.fontWeight};
	color: ${(props) => props.color};
	font-size: ${(props) => props.size};
	text-align: ${(props) => props.align};
	padding: ${(props) => props.padding};
	margin: ${(props) => props.$margin};
	background-color: ${(props) => props.bgColor};
	${(props) => props.$styleString};
`
