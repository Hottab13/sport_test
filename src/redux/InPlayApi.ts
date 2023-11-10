import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
//const API_TOKEN="175620-1MPEig4Hs0Fbga"

/*type getInPlayProps={
    success:number;
    pager: {
        page:number;
        per_page: number;
        total:number;
    },
    results: any[];
}*/

export const InPlayApi = createApi({
  reducerPath: "InPlayApi",
  tagTypes: ["Play"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.b365api.com/v1/1xbet/inplay?",
    //baseUrl: "http://localhost:5000/",
    //credentials: "same-origin", 
    //mode: 'no-cors',
    prepareHeaders: (headers) => {
        const accessToken = localStorage.getItem("token");
        if (accessToken) {
            headers.set("authorization", `Bearer ${accessToken}`);
            headers.set("Content-Type", "application/json");
        }
        return headers;
    },
  }),
  endpoints: (builder) => ({
    getInPlay:builder.query({
      query: () => `sport_id=1&token=175620-1MPEig4Hs0Fbga`,
    }),
    /*getDoctors: builder.query<AuthState[], void>({
      query: () => "doctors/",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Doctors" as const, id })),
              { type: "Doctors", id: "LIST", desiredWorkTime: "TIME" },
            ]
          : [{ type: "Doctors", id: "LIST", desiredWorkTime: "TIME" }],
    }),
    getDoctorData: builder.query({
      query: (doctor) => `doctors/${doctor.id}`,
    }),

    addDoctorWorkingHours: builder.mutation<
      WorkTime,
      AddApprovedWorkHoursProps
    >({
      query: (payload) => ({
        url: "desired-work-time/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        {
          type: "Doctors",
          id: "LIST",
        },
      ],
    }),
    delDoctorWorkingHours: builder.mutation<
      number,
      AddApprovedWorkHoursProps
    >({
      query: (payload) => ({
        url: "desired-work-time/del",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        {
          type: "Doctors",
          id: "LIST",
        },
      ],
    }),

    addApprovedWorkHours: builder.mutation<
      WorkTime,
      AddApprovedWorkHoursProps
    >({
      query: (payload) => ({
        url: "approved-work-time/add",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        {
          type: "Doctors",
          id: "LIST",
        },
      ],
    }),
    delApprovedWorkHours: builder.mutation<
      number,
      AddApprovedWorkHoursProps
    >({
      query: (payload) => ({
        url: "approved-work-time/del",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: [
        {
          type: "Doctors",
          id: "LIST",
        },
      ],
    }),*/
  }),
});

export const {
useGetInPlayQuery
} = InPlayApi;
