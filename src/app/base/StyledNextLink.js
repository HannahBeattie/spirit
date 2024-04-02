import { Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'
import { useRouter } from 'next/navigation'

export default function StyledNextLink({ href, children, ...props }) {
	const router = useRouter()
	const currentRoute = router.pathname
	const isCurrent = href === currentRoute

	return (
		<NextLink href={href} passHref legacyBehavior>
			<Link
				_hover={{
					textDecoration: 'none',
				}}
				fontWeight={href === currentRoute ? '600' : '400'}
				{...props}
			>
				{children}
			</Link>
		</NextLink>
	)
}
