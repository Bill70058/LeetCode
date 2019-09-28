function func(params) {
    let a = params.slice(0,1);
    let b = params.slice(0,1).concat(params.slice(2));
    let c = params.slice(2);
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(params);
};

func([2,3]);