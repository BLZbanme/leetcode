function corpFlightBookings1(bookings: number[][], n: number): number[] {
    const result = Array(n).fill(0);
    for (let [i, j, num] of bookings) {
        while (i <= j) {
            result[i++ - 1] += num;
        }
    }
    return result;
};

function corpFlightBookings(bookings: number[][], n: number): number[] {
    const result = Array(n).fill(0);
    for (let [i, j, num] of bookings) {
        result[i - 1] += num;
        j < n && (result[j] -= num);
    }
    for (let i = 1; i < n; i++) {
        result[i] += result[i - 1];
    }
    return result;
};