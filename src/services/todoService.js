import httpService from "./httpService";

const todoEndPoint = "todos/";

const todoService = {
  fetch: async () => {
    const { data } = await httpService.get(todoEndPoint, {
      params: {
        _page: 1,
        _limit: 10,
      },
    });
    return data;
  },
  create: async (title) => {
    const { data } = await httpService.post(todoEndPoint, {
      title: title,
      completed: false,
    });
    return data;
  },
};

export default todoService;
