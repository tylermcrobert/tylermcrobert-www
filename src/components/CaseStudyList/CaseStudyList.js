import React from 'react';
import CaseStudy from './CaseStudy/CaseStudy';

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
  const selectedCaseStudy = props.currentCaseStudy;
  const list = csListData.map((tag) => {
    const caseStudyIsMatch = selectedCaseStudy === tag.case_study_item.uid;
    if (caseStudyIsMatch) {
      return (
        <CaseStudy
          slug={tag.case_study_item.slug}
          id={tag.case_study_item.id}
          key={tag.case_study_item.id}
          currentCaseStudy={props.currentCaseStudy}
          changeCaseStudy={props.changeCaseStudy}
          prismicCtx={props.prismicCtx}
        />
      );
    } else if (!selectedCaseStudy) {
      return (
        <h2
          onClick={() => { props.changeCaseStudy(tag.case_study_item.uid); }}
          key={tag.case_study_item.id}
        >
          {tag.case_study_item.slug}
        </h2>);
    }
    return null;
  });

  return (
    <div className="caseStudies">
      <TagList />
      <ul className="caseStudy">{list}</ul>
    </div>
  );
}
