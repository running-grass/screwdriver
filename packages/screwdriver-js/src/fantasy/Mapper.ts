export interface Mapper<A, B> {
    (a: A): B;
};

export default Mapper;