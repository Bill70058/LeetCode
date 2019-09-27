function func(params) {
    let a = params.slice(0,1);
    let b = params.slice(0,0).concat(params.slice(1));
    console.log(b);
    console.log(a);
    console.log(params);
};

func([1,2,3]);