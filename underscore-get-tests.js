import { Tinytest } from "meteor/tinytest";
import { get } from "meteor/insthink:underscore-get";

var testUser = {
  profile: {
    workData: {
      department: 'IT'
    },
    name: 'John Doe',
  },
};

Tinytest.add('underscore-get - get nested data', function (test) {
  test.equal(get(testUser, 'profile.workData.department'), 'IT');
  test.equal(get(testUser, 'profile.name'), 'John Doe');
});

Tinytest.add('underscore-get - get undefined nested data ', function (test) {
  test.equal(get(testUser, 'profile.workData.phone'), undefined);
  test.equal(get(testUser, 'profile.workData.phone', '12345'), '12345');
});

