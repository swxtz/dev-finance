// "use client";

// import { useQuery } from "@tanstack/react-query";

// export function useQueryGetBalance() {
//     const { data, isLoading } = useQuery({
//         queryKey: ["balance"],
//         queryFn: async () => {
//             const token = await getServerSession(nextAuthOptions);
//             const response = await axios.get(`${apiUrl}/balance`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`,
//                 },
//             });
//             const balance = await response.data();
//             return balance;
//         },
//     });
// }