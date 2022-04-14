// @ts-nocheck
import styled from 'styled-components';
import jp from 'jsonpath';
import media from 'styled-media-query';
import { theme } from '../../styles/theme';

const Wrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: unset;

	h2 {
		width: 100%;
		${theme.pageBuilder.h2};
	}
`;

const Tag = styled.div<{ color: any }>`
	border: 2px solid ${(p) => p.color};
	border-radius: 4px;
	padding: 15px;
	flex: 0 31%;
	margin: 10px 10px 10px 0px;
	display: flex;
	${media.lessThan('huge')`flex: 0 48%;`}
	${media.lessThan('large')`flex: 0 100%;`}

	.box {
		width: 120px;
		height: 100px;
		background: linear-gradient(73.6deg, ${(p) => p.color} 2.11%, ${(p) => p.color} 80%);
		border-radius: 3px;
	}

	.content {
		width: fit-content;
		margin-left: 10px;
		.title {
			font-family: 'Inter';
			font-style: normal;
			font-weight: 700;
			font-size: 16px;
			line-height: 17px;
			color: #ffffff;
		}
		.intro {
		}

		.count {
			display: inline;
			position: absolute;
			vertical-align: bottom;
		}
	}
`;

const TagsBlock = ({ guideTags }: TagsBlockProps) => {
	const allTags = jp.query(guideTags, '$..tags[*]');
	const countOccurrence = (arr) => {
			let uniqueArray = [],
				hashTable = {};

			arr.forEach((item) => {
				if (!hashTable[item.title]) {
					uniqueArray.push((hashTable[item.title] = { ...item, occurrence: 0 }));
				}
				hashTable[item.title].occurrence++;
			});

			return uniqueArray;
		},
		tags = countOccurrence(allTags);

	//console.log(tags);

	return (
		<Wrapper>
			<h2>Tags Collections</h2>
			{tags.map((tag, index) => (
				<Tag key={index} color={tag.color.hex}>
					<div className="box"></div>
					<div className="content">
						<p className="title">{tag.title}</p>
						<p className="intro">{tag.introText}</p>
						<p className="count">{tag.count} Guides</p>
					</div>
				</Tag>
			))}
		</Wrapper>
	);
};

interface TagsBlockProps {
	props: object;
}

export default TagsBlock;
