for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

for (let i = 0; i < 20; i++) {
    if (i === 10) {
        console.log('i 가 10이 되었다.');
        // continue;
        break;
    }
    console.log(i);
}
