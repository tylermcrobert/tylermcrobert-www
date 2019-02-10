export default function getIndex({ caseStudies, caseStudyUid }) {
  if (caseStudies) {
    const index = caseStudies.map(cs => cs.uid).indexOf(caseStudyUid);
    return index !== -1 ? index : null;
  }
  return undefined;
}
