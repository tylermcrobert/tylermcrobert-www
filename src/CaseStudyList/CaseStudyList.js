import React from 'react';
import CaseStudy from '../CaseStudy/CaseStudy';

function Tag(props) {
  return (<li>{props.name}</li>);
}

const TagList = () => {
  const TAGS = [
    { name: 'Dev', key: '0' },
    { name: 'UX', key: '1' },
    { name: 'Digital', key: '2' },
    { name: 'Print', key: '4' },
  ];
  const tagList = TAGS.map(tag =>
    <Tag name={tag.name} key={tag.key} isActive isHovered />);

  return (
    <ul>{tagList}</ul>
  );
};

export default function CaseStudies(props) {
  const csListData = props.doc.data.case_study_list;
  const list = csListData.map(tag => (
    <CaseStudy
      slug={tag.case_study_item.slug}
      id={tag.case_study_item.id}
      key={tag.case_study_item.id}
      currentCaseStudy={props.currentCaseStudy}
      changeCaseStudy={props.changeCaseStudy}
      prismicCtx={props.prismicCtx}
    />
  ));

  return (
    <div className="caseStudies">
      <TagList />
      <ul className="caseStudy">{list}</ul>
    </div>
  );
}
