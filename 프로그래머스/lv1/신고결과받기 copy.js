function solution(id_list, report, k) {
  // 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.
  let reportSet = new Set(report);
  reportSet = Array.from(reportSet);

  console.log(reportSet);

  const willSendIdList = {};
  id_list.forEach((id) => (willSendIdList[id] = 0));

  console.log(willSendIdList, "willSendIdList");

  const reportCount = {};
  reportSet.forEach((id) => {
    const reportedId = id.split(" ")[1];
    reportCount[reportedId] ? reportCount[reportedId]++ : (reportCount[reportedId] = 1);
  });

  console.log(reportCount, "reportCount");
  const reportCountArray = Object.entries(reportCount);
  const filteredReportCountArray = reportCountArray.filter((id) => id[1] >= k);

  console.log(filteredReportCountArray, "filteredReportCountArray");

  filteredReportCountArray.forEach((filteredId) => {
    reportSet.forEach((id, index) => {
      if (filteredId[0] === id.split(" ")[1]) {
        willSendIdList[id.split(" ")[0]]++;
      }
    });
  });

  console.log(Object.values(willSendIdList));
  return Object.values(willSendIdList);
}
solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2);

// 게시판 불량 이용자를 신고하고 처리 결과를 메일로 발송하는 시스템

// 각 유저는 한 번에 한 명의 유저를 신고할 수 있습니다.
// 신고 횟수에 제한은 없습니다. 서로 다른 유저를 계속해서 신고할 수 있습니다.
// 한 유저를 여러 번 신고할 수도 있지만, 동일한 유저에 대한 신고 횟수는 1회로 처리됩니다.

// k번 이상 신고된 유저는 게시판 이용이 정지되며, 해당 유저를 신고한 모든 유저에게 정지 사실을 메일로 발송합니다.
// 유저가 신고한 모든 내용을 취합하여 마지막에 한꺼번에 게시판 이용 정지를 시키면서 정지 메일을 발송합니다.

// 이용자의 ID가 담긴 문자열 배열 id_list
// 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 배열 report
// 정지 기준이 되는 신고 횟수 k

// 각 유저별로 처리 결과 메일을 받은 횟수를 배열에 담아 return

// "muzi frodo"의 경우 "muzi"가 "frodo"를 신고했다는 의미
