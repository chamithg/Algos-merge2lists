var mergeTwoLists = function (list1, list2) {
  let runner = new ListNode();
  let dummyHead = runner;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      runner.next = new ListNode(list1.val);
      list1 = list1.next;
    } else {
      runner.next = new ListNode(list2.val);
      list2 = list2.next;
    }
    runner = runner.next;
  }
  if (list1) {
    runner.next = list1;
  }

  if (list2) {
    runner.next = list2;
  }
  return dummyHead.next;
};
