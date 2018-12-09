/**
 * Description:
 Given a non-overlapping interval list which is sorted by start point.

 Insert a new interval into it, make sure the list is still in order and non-overlapping
 (merge intervals if necessary).

 Example:
 Insert (2, 5) into [(1,2), (5,9)], we get [(1,9)].

 Insert (3, 4) into [(1,2), (5,9)], we get [(1,2), (3,4), (5,9)].

 */

/**
 * @param intervals: Sorted interval list.
 * @param newInterval: new interval.
 * @return: A new interval list.
 */
const insert = function (intervals, newInterval) {

    // If set is empty then simply insert
    // newInterval and return.
    if (!intervals.length) {
        intervals.push(newInterval);
        return formatOutput(intervals);
    }

    // Case 1 (new interval to be inserted at left corner)
    if (newInterval.end < intervals[0].start) {
        intervals.unshift(newInterval);
        return formatOutput(intervals);
    }

    //Case 2 (new interval to be inserted at right corner)
    if (newInterval.start > intervals[intervals.length - 1].end) {
        intervals.push(newInterval);
        return formatOutput(intervals);
    }

    //case 3 (New interval covers all existing intervals)
    if (newInterval.start < intervals[0].start &&
        newInterval.end > intervals[intervals.length - 1].end) {
        return formatOutput([newInterval]);
    }

    // Case 4 and Case 5
    // These two cases need to check whether
    // intervals overlap or not. For this we
    // can use a subroutine that will perform
    // this function.

    let finalIntervals = [];

    for (let i = 0; i < intervals.length; ++i) {
        let overlap = doOverlap(newInterval, intervals[i]);

        if (!overlap) {
            finalIntervals.push(intervals[i]);

            // Case 4 : To check if given interval
            // lies between two intervals.
            if (i < intervals.length &&
                newInterval.start > intervals[i].end &&
                newInterval.end < intervals[i + 1].start) {
                finalIntervals.push(newInterval);
            }

            continue;
        }

        // Case 5 : Merge Overlapping Intervals.
        // Starting time of new merged interval is
        // minimum of starting time of both
        // overlapping intervals.
        let temp = {};
        temp.start = Math.min(newInterval.start, intervals[i].start);

        // Traverse the set until intervals are
        // overlapping
        while (i < intervals.length && overlap) {

            // Ending time of new merged interval
            // is maximum of ending time both
            // overlapping intervals.
            temp.end = Math.max(intervals[i].end, newInterval.end);


            if (i === intervals.length - 1) {
                overlap = false;
            } else {
                overlap = doOverlap(intervals[i], newInterval);
            }
            ++i;
        }
        --i;
        finalIntervals.push(temp);
    }

    return formatOutput(finalIntervals);
};

// A subroutine to check if intervals overlap or not.
function doOverlap(intervalOne, intervalTwo) {
    return Math.min(intervalOne.end, intervalTwo.end) >= Math.max(intervalOne.start, intervalTwo.start)
}

function formatOutput(intervals){

    return intervals.map(interval => {
        return `(${interval.start},${interval.end})`
    })

}

let intervals = [{
    start:1,
    end:2
},{
    start:5,
    end:9
}];

let newInterval = {
    start:3,
    end:4
};

console.log(insert(intervals, newInterval));