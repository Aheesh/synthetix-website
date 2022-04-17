// @ts-nocheck
import { PropsWithChildren } from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { FlexDivColCentered } from 'src/styles/common';
import { Header } from '..';
import Sidebar from '../Sidebar';
import BuildFooter from '../Build/BuildFooter';
import GuidesHeader from './GuidesHeader';

const OutWrapper = styled.div`
	width: 100%;
	background-color: #000; //TODO: refactor to body black background and remove this
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	position: relative;
	gap: var(--s1);
	max-width: ${({ theme }) => theme.maxContentWidth};
	width: 100%;
	position: relative;
	margin: 0 auto;
`;

const MainContent = styled.div`
	flex-basis: 0;
	flex-grow: 999;
	min-inline-size: 50%;
	padding: 0 50px;
	min-height: 100vh; //TODO: refactor to body black background and remove this

	${media.lessThan('medium')`
		padding: 0 25px;
	`}
`;

interface sIProps {
	lv: string;
}

type GuidesPageLayoutProps<T> = {
	children: React.Ref<HTMLUListElement> | null;
	headings: [
		{
			style: string;
			slug: string;
			text: string;
		}
	];
	navDocs: T[];
	nextDoc: T[];
	prevDoc: T[];
	updatedAt: T[];
	mainImage: T[];
};

export default function GuidesPageLayout<T>(props: GuidesPageLayoutProps<T>) {
	const { children, navDocs, updatedAt, mainImage, title, subTitle, subPos } = props;
	const subMenu = {
		label: 'guides',
		navtitle: 'User Guides',
		items: navDocs,
	};

	return (
		<FlexDivColCentered>
			<Header navDocs={subMenu} />
			<OutWrapper>
				<ContentWrapper>
					<Sidebar navDocs={navDocs} subSlug="guides" />
					<MainContent>
						<GuidesHeader mainImage={mainImage} title={title} subTitle={subTitle} subPos={subPos} />
						{children}
						<BuildFooter updatedAt={updatedAt} />
					</MainContent>
				</ContentWrapper>
			</OutWrapper>
		</FlexDivColCentered>
	);
}
