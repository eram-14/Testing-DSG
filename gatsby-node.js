const path = require("path");

const Data = [
    {
      link: 'https://tests.practicereasoningtests.com/shl-test',
      img: 'sidebar-test-shl.png',
      title: 'SHL Practice Test',
      color: '#5CBFE9',
    },
    {
      link: 'https://tests.practicereasoningtests.com/aptitude-test',
      img: 'sidebar-test-numerical.png',
      title: 'Practice Aptitude Test',
      color: '#257ABD',
    },
    {
      link: 'https://tests.practicereasoningtests.com/korn-ferry-assessment',
      img: 'sidebar-test-inductive.png',
      title: 'Korn Ferry Practice Test',
      color: '#37BA86',
    },
    {
      link: 'https://tests.practicereasoningtests.com/transport-sec-admin-test',
      img: 'sidebar-test-abstact.png',
      title: 'TSA Practice Test',
      color: '#BAA44E',
    },
    {
      link: 'https://tests.practicereasoningtests.com/watson-glaser',
      img: 'sidebar-test-cognitive.png',
      title: 'Watson Glaser Practice Test',
      color: '#FB7921',
    },
    {
      link: 'https://tests.practicereasoningtests.com/gia-test',
      img: 'sidebar-test-logical.png',
      title: 'Thomas Gia Practice Test',
      color: '#264E71',
    },
    {
      link: 'https://tests.practicereasoningtests.com/caliper-asessment',
      img: 'sidebar-test-caliper.png',
      title: 'Caliper Practice Test',
      color: '#5cbfea',
    },
    {
      link: 'https://tests.practicereasoningtests.com/predictive-index',
      img: 'sidebar-test-pi.png',
      title: 'PI Practice Test',
      color: '#37BA86',
    },
    {
      link: 'https://tests.practicereasoningtests.com/hogan-assessment',
      img: 'sidebar-test-hogan.png',
      title: 'Hogan Practice Test',
      color: '#BAA44E',
    },
  ]
  

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
 
  Data.forEach((e) => {
    createPage({
      path: e.title.toLowerCase().replaceAll(' ','-'),
      component: path.resolve("./src/templates/Test.js"),
      context: {
        data: e,
      },
      defer:true
    });
  });

  
};