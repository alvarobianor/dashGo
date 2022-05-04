import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const getRandomValues = (num: number) => {
  const aux = [];

  for (let index = 0; index < num; index++) {
    aux.push(parseInt(Number(Math.random() * 10000).toFixed(0)));
  }

  return aux;
};

const options: ApexOptions = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[500],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  stroke: {
    width: 4,
  },
  xaxis: {
    type: "datetime",
    axisBorder: {
      color: theme.colors.gray[600],
    },
    axisTicks: {
      color: theme.colors.gray[600],
    },
    categories: [
      "2022-03-17TO0:00:00.000Z",
      "2022-03-18TO0:00:00.000Z",
      "2022-03-19TO0:00:00.000Z",
      "2022-03-20TO0:00:00.000Z",
      "2022-03-21TO0:00:00.000Z",
      "2022-03-22TO0:00:00.000Z",
      "2022-03-23TO0:00:00.000Z",
      "2022-03-24TO0:00:00.000Z",
      "2022-03-25TO0:00:00.000Z",
      "2022-03-26TO0:00:00.000Z",
      "2022-03-27TO0:00:00.000Z",
      "2022-03-28TO0:00:00.000Z",
      "2022-03-29TO0:00:00.000Z",
      "2022-03-30TO0:00:00.000Z",
      "2022-03-31TO0:00:00.000Z",
    ],
  },

  fill: {
    opacity: 0.3,
    type: "gradient",
    gradient: {
      shade: "dark",
      opacityFrom: 0.7,
      opacityTo: 0.7,
    },
  },
};

const series = [
  {
    name: "series1",
    data: getRandomValues(15),
  },
];

const series2 = [
  {
    name: "series2",
    data: getRandomValues(15),
  },
];

export default function DashBoard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <SimpleGrid
          flex="1"
          gap="4"
          minChildWidth={["310px", "400px"]}
          alignItems="flex-start"
        >
          <Box
            p={["6", "8"]}
            bg="gray.800"
            borderRadius={8}
            // pb="4"|
          >
            <Text fontSize="lg" mb="4">
              Incritos da semana
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>

          <Box
            p="8"
            bg="gray.800"
            borderRadius={8}
            // pb="4"|
          >
            <Text fontSize="lg" mb="4">
              Taxa de abertura
            </Text>
            <Chart
              options={options}
              series={series2}
              type="area"
              height={160}
            />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
