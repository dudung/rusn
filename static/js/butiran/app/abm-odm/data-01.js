var data01 = `
10000
00 | 0,1,2,3,2,3,2,3,2,3,2,3,0,1,0,2,0,2,1,3,2,0,2,3,2,3,0,2,0,1,0,1,0,2,0,2,0,2,0 | 0,376,617,722,817,1043,1529,1749,2107,2260,2410,2727,3458,3797,3909,4271,4352,4425,4681,4870,5227,5580,6017,6141,6626,6808,7015,7086,7309,7414,7653,7726,8317,8373,8475,8633,8702,8811,9154
01 | 0,1,3,2,0,2,3,2,3,0,2,0,1,3,2,0,1,3,2,0,2,0,2,0,2,0,2,0,2,1,3,2 | 0,335,470,770,917,1320,2111,2648,2958,4067,4136,4639,4820,5277,5390,5560,5711,6128,6895,7540,7711,7849,7936,8173,8256,8574,8652,9014,9109,9571,9809,9909
02 | 0,2,0,2,3,2,0,1,3,2,3,0,1,3,2,0,2,0,2,3,0,1,0,1,3,2,3,2,0,2 | 0,475,573,750,1428,1903,2119,2206,2419,3005,3086,3293,3782,4225,4383,4658,4741,4803,5663,6070,8106,8257,8424,8487,8642,8906,9222,9325,9707,9855
03 | 0,1,0,1,3,1,3,2,3,2,3,2,0,1,3,2,0,2,0,1,3,2,3,2,3,2,0,2,3,1,0,2,3,2 | 0,207,333,442,1033,1550,1691,1816,2097,2394,2675,3073,3228,3637,3858,4111,4267,4377,4464,4801,5190,5635,5881,6499,6573,6898,7184,7709,8003,8615,8723,8813,9042,9567
04 | 0,1,0,2,0,1,0,3,1,3,0,1,0,2,0,2,0,2,0,1,0,2,0,1,3,2,3,2,3,2,1,3,0,3,0,3,1 | 0,296,522,798,1058,1324,1420,1643,1871,2083,2315,2494,2624,2833,2918,3004,3259,3459,3535,4063,4347,4436,4668,4960,5213,5526,6054,6457,6675,7562,7778,7963,8327,8689,9413,9661,9938
05 | 0,2,0,1,0,1,0,2,0,2,3,0,1,0,2,1,0,1,0,2,0,2,3,2,0,1,0,1,0,1,3,2,0,2,0,2,0 | 0,176,353,640,704,974,1045,1439,1519,1601,1822,2000,2871,3069,3479,3819,4064,4209,4365,5172,5235,5339,5603,5821,6052,6272,6516,6724,7296,7611,7844,8338,8656,9049,9370,9567,9969
06 | 0,1,0,1,0,1,3,2,3,0,3,0,2,0,1,0,1,0,2,3,2,0,2,3,2,3,2,3,1 | 0,322,380,493,549,1135,1441,1821,1888,3213,3410,3641,3888,3974,4752,4913,5101,5617,5688,5933,6349,7097,7592,8600,8825,9032,9199,9544,9790
07 | 0,2,3,2,0,2,3,2,3,2,3,2,0,2,3,2,0,2,0,1,3,0,3,1,0,3 | 0,284,580,1259,1520,1717,1925,2123,2203,3424,3956,4269,4377,4731,5163,6060,6210,6962,7216,7721,7828,8066,8508,8977,9178,9432
08 | 1,0,2,0,2,0,2,0,2,0,2,3,2,3,1,0,2,0,3,2,3,2,0,1,3,2,3,2,0,3 | 0,233,1035,1635,1704,1872,1948,2290,2369,2782,2851,3118,3328,3641,4028,4118,4205,4496,4984,5648,5860,6252,6479,6648,7223,7307,8350,8464,9099,9360
09 | 1,0,1,0,1,0,1,0,2,0,2,1,2,0,2,0,2,0,2,0,2,0,2,3,2,3,2,0,1,3,2,3,2,0,2,0,2 | 0,99,475,577,854,1259,1336,1431,2020,2097,2184,3044,3260,3536,3620,3732,3796,4069,4914,5111,5188,5295,5405,5629,6357,6653,6721,7351,8016,8505,8938,8999,9084,9364,9480,9614,9893
10 | 1,3,2,3,0,2,3,0,2,0,2,0,2,3,2,0,2,0,2,0,3,2,3,2,3,1,3,0,1,3,0,2 | 0,268,476,608,1356,1495,2300,2875,3305,3570,3681,3752,3889,4387,4796,5124,5376,5464,5589,5650,6123,6338,6725,7267,7515,7754,7991,8242,8881,9275,9476,9685
11 | 1,0,1,0,2,0,2,3,2,0,1,3,2,3,0,2,0,2,0,2,0,1,3,2,0,2,0,2,0,2,0,1,0,1,3 | 0,304,367,731,1094,1317,1420,1666,1957,2373,2880,3109,3575,3989,4965,5048,5129,5232,5677,6226,6494,7034,7130,7464,7914,8014,8327,8481,8563,8876,9071,9252,9318,9417,9547
12 | 1,0,1,3,0,3,2,0,2,0,2,0,2,0,2,0,1,3,0,2,0,2,0,1,0,2,0,2,0,2,0,2,0,1,0 | 0,77,150,345,744,1021,1197,1354,1490,1588,2056,2627,2711,2997,3726,4000,4188,4437,4718,5174,5262,5314,5794,6103,6395,6690,6911,6989,7552,7737,7979,8165,8596,9366,9424
13 | 1,0,2,0,2,0,1,0,2,3,0,2,0,2,0,2,0,2,0,2,0,2,0,2,0,2,3,2,0,2,0,2,0,1,0,2 | 0,142,794,1080,1454,1622,2085,2418,2647,2735,3010,3071,3218,3395,3460,3946,4054,4120,4414,4823,4910,5150,5216,5295,5546,5702,6042,7141,7363,7503,7697,7842,8106,8472,8740,9927
14 | 2,0,2,0,1,0,2,0,1,3,2,0,2,3,0,1,3,2,0,2,0,1,0,1,0,1,3,2,3,2,3,0,2,0,3,2,3,2,1,0,2,0,2 | 0,71,185,421,727,911,1017,1095,1412,1915,2430,2621,2714,2836,3117,3350,4049,4159,4298,4444,4513,5419,5491,5572,5688,5980,6109,6243,6457,6568,6916,7731,7798,8041,8274,8433,8632,8696,8947,9181,9295,9423,9558
15 | 2,0,2,0,2,3,1,3,1,3,0,2,0,2,0,2,3,1,3,2,0,2,0,2,0,1,0,1,0,1 | 0,136,243,303,448,782,1301,1535,3120,3225,4336,4769,5121,5246,5318,5459,5586,5873,6076,6964,7428,7639,7928,8032,8151,8456,8770,9624,9894,9986
16 | 2,3,2,0,3,0,2,0,1,0,1,0,1,0,2,3,0,2,3,2,0,2,0,1,3,2,3,2,3,2,0,2,0,2,0 | 0,102,353,458,1188,2043,2835,3116,3244,3310,3371,3445,3519,3734,4075,4206,4748,4849,4970,5136,5716,5848,5927,6126,6440,6742,7066,8069,8357,8648,9089,9178,9478,9815,9983
17 | 2,0,1,0,1,0,2,0,3,2,0,2,3,0,2,0,2,0,1,0,2,3,0,3,2,0,2,0,2,3 | 0,234,493,634,932,1034,1878,2004,2423,2544,2688,2969,3164,3382,3538,3627,3716,3897,4146,4252,4356,4561,5171,5373,5712,5985,6921,7197,7418,8028
18 | 3,2,0,2,0,2,0,1,3,2,0,2,3,0,1,0,1,3,2,0,2,0,1,3,2,0,2,0,1,0,2,0,2,0 | 0,456,872,1097,1212,1526,1994,2133,2627,3460,3691,3809,4180,5017,5112,5431,5920,6210,6430,6632,7344,7437,7589,7712,7943,8257,8337,8520,8889,8988,9516,9655,9931,9992
19 | 3,2,3,2,3,1,0,2,0,2,0,2,0,2,0,2,3,0,2,0,2,0,1,0,2,0,1,0,1,0,1,3 | 0,698,954,1060,1170,1412,1651,2095,2164,2239,2336,2400,2509,2641,2764,3830,4050,5415,5469,5734,5838,6121,6274,7089,7809,7869,8597,8944,9089,9197,9331,9984
20 | 3,2,3,2,3,2,0,2,0,2,3,0,2,0,2,3,2,3,2,3,2,3,0,2,3,1,0 | 0,401,512,1319,1684,2414,2711,3035,3112,3174,3305,3654,4030,4537,4878,5475,5824,6269,6455,6661,7268,7490,7784,8026,8335,9439,9739
`;