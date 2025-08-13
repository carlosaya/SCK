+++
date = "2018-06-21T08:52:14+00:00"
gallery = [ ]
title = "Enrol Now"
banner = ""
tags = [ ]
categories = [ ]

[menu.main]
weight = 6
+++

<strong id="enrol-link-container"></strong>

To place your child’s name on the waiting list, parents are asked to complete the online waiting list form.  Waiting list places are determined by receipt of the form (whether this is completed online or in person).

Your child’s name may be placed on the waiting list from the 1st of July of the year following his or her birth (please refer to the table below). Children are enrolled at the Centre in order of placement on the waiting list. As waiting lists are usually long at Samford Kindy, we advise placing children’s names on the list as soon as possible. It is the policy of both Samford Community Kindergarten and C\&K that we do not disclose your child’s number on our waiting list.

Families are offered places for their children from mid-May prior to the year they will attend. Upon accepting the offer, an enrolment fee is payable. The enrolment fee is non-refundable if the child is withdrawn from Kindy.

By completing the waiting list form and submitting the booking fee payment you agree to the following:

* that the form is for the waiting list only.
* that it is my responsibility to notify the Centre of any changes to my contact details.
* that children are enrolled at the Centre in order of placement on the waiting list.

**Year of attendance**

Children must be at least 4 years old by 30 June in the year they are enrolled in an approved kindergarten program.

**Queensland Kindergarten Funding (QKF)**

If your child is of eligible age, our service may be entitled to claim funding on behalf of you child. If your child is enrolled at another kindergarten program and they are claiming the funding for your child, our service will not be able to claim the funding. You will need to notify us if your child is enrolled and claiming at another kindergarten.

Please be advised that Samford Community Kindergarten does not have a sibling policy.

<table>
  <thead>
    <tr>
      <th style="text-align: left;">Child born between:</th>
      <th style="text-align: center;">Attends Kindy</th>
      <th style="text-align: left;">Place on waiting list from:</th>
    </tr>
  </thead>
  <tbody id="enrolment-table-body">
    <!-- This will be populated by JavaScript -->
  </tbody>
</table>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    // --- Configuration ---
    const numberOfYearsToShow = 7; // Show a 4-year window, e.g., 2024-2027
    // Use Hugo's `ref` shortcode to create a robust, unbreakable link.
    // This is a great hybrid approach!
    const waitingListUrl = "{{< ref "waiting-listv2" >}}";

    // --- DOM Elements ---
    const tableBody = document.getElementById('enrolment-table-body');
    const enrolLinkContainer = document.getElementById('enrol-link-container');

    if (!tableBody || !enrolLinkContainer) {
      console.error('Required DOM elements for enrolment table not found.');
      return;
    }

    // --- Date Calculations ---
    const now = new Date();
    const currentYear = now.getFullYear();
    const currentMonth = now.getMonth(); // 0 = Jan, 5 = June, 6 = July


    // If it's before July 1st, the previous year's intake is still relevant for display.
    // Otherwise, we show the current year's intake onwards.
    let firstYearInTable;
    if (currentMonth <= 5) { // Before July 1st (Jan-June)
      firstYearInTable = currentYear - 1;
    } else { // On or after July 1st (July-Dec)
      firstYearInTable = currentYear;
    }
    const lastYearInTable = firstYearInTable + numberOfYearsToShow - 1;

    // --- Update Top Enrolment Link ---
    const enrolLink = document.createElement('a');
    enrolLink.href = waitingListUrl;
    enrolLink.textContent = `Click here to Enrol Now for the ${firstYearInTable} - ${lastYearInTable-2} waiting lists`;
    enrolLinkContainer.appendChild(enrolLink);

    // --- Generate Table Rows ---
    let tableHtml = '';
    for (let i = 0; i < numberOfYearsToShow; i++) {
      const kindyYear = firstYearInTable + i;
      const birthYearStart = kindyYear - 5;
      const birthYearEnd = birthYearStart + 1;

      // The waiting list for a given Kindy year opens on July 1st, 4 years prior.
      // e.g., for Kindy 2027, the list opens July 1st, 2023.
      const waitingListOpenYear = kindyYear - 4;

      // Note: In JS, month is 0-indexed, so 6 = July.
      const waitingListOpenDate = new Date(waitingListOpenYear, 6, 1);

      let waitingListCellHtml = '';
      if (now >= waitingListOpenDate) {
        waitingListCellHtml = `<strong><a href="${waitingListUrl}">Now Open</a></strong>`;
      } else {
        waitingListCellHtml = `1 July ${waitingListOpenYear}`;
      }

      tableHtml += `
        <tr>
          <td style="text-align: left;">1 July ${birthYearStart} to 30 June ${birthYearEnd}</td>
          <td style="text-align: center;">${kindyYear}</td>
          <td style="text-align: left;">${waitingListCellHtml}</td>
        </tr>`;
    }

    tableBody.innerHTML = tableHtml;
  });
</script>
