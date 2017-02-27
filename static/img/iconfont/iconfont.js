;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shezhi" viewBox="0 0 1000 1000">' +
    '' +
    '<path d="M513.7533 302.7707c-98.5783 0-178.4905 79.9108-178.4905 178.483 0 98.5742 79.9122 178.483 178.4905 178.483s178.4905-79.9088 178.4905-178.483C692.2437 382.6805 612.3316 302.7707 513.7533 302.7707zM513.7533 580.4095c-54.7642 0-99.1609-44.3929-99.1609-99.1568 0-54.7629 44.3968-99.1568 99.1609-99.1568 54.7652 0 99.1609 44.3949 99.1609 99.1568C612.9142 536.0176 568.5184 580.4095 513.7533 580.4095zM899.2241 391.7344c-10.3444-10.2051-24.5024-24.2276-26.9029-31.9363-2.7133-8.7141 0.7535-28.6995 3.5437-44.7557 5.7513-33.0566 12.2582-70.5502-9.1232-101.1874-21.5753-30.8691-59.5741-36.1945-90.0977-40.4736-15.3782-2.1495-34.4721-4.8407-41.3287-10.0322-6.6238-5.0156-14.8366-22.9295-21.4404-37.3387-13.3625-29.1842-30.0199-65.4956-65.2675-77.4255-7.0885-2.4014-14.6027-3.6215-22.3508-3.6215-25.9305 0-49.2517 13.0931-71.7943 25.7395-14.0211 7.8617-31.452 17.6221-40.7101 17.6221-9.2581 0-26.688-9.7614-40.6921-17.6221-22.5437-12.6464-45.8818-25.7395-71.8143-25.7395-7.7271 0-15.2613 1.2192-22.3488 3.6405-35.2296 11.9109-51.885 48.2223-65.2675 77.4055-6.6058 14.3892-14.8166 32.3231-21.4404 37.3387-6.8367 5.1915-25.9505 7.8827-41.3107 10.0322-30.5416 4.2601-68.5404 9.5865-90.0977 40.4736-21.4014 30.6372-14.8945 68.1308-9.1402 101.1874 2.7902 16.0551 6.275 36.0416 3.5437 44.7557-2.4015 7.7088-16.5595 21.7313-26.8809 31.9363-22.6606 22.4258-50.8597 50.3319-50.8597 89.5093 0 39.2084 28.1991 67.1055 50.8597 89.5313 10.3204 10.2271 24.4794 24.2456 26.8809 31.9144 2.7313 8.7161-0.7535 28.7015-3.5437 44.7756-5.7533 33.0386-12.2602 70.5322 9.1402 101.1694 21.5573 30.907 59.5561 36.2144 90.0977 40.4736 15.3602 2.1695 34.4541 4.8427 41.3107 10.0322 6.6238 5.0336 14.8346 22.9684 21.4404 37.3747 13.3825 29.1682 30.0179 65.4596 65.2855 77.3905 7.0905 2.4014 14.6047 3.6405 22.3308 3.6405 25.9325 0 49.2517-13.0931 71.8143-25.7196 14.0031-7.8627 31.434-17.662 40.6921-17.662 9.2581 0 26.688 9.7984 40.7101 17.662 22.5437 12.6264 45.8638 25.7196 71.7943 25.7196 7.7481 0 15.2633-1.2392 22.3508-3.6405 35.2476-11.9309 51.905-48.2223 65.2675-77.3905 6.6038-14.4052 14.8166-32.3411 21.4404-37.3747 6.8556-5.1895 25.9505-7.8627 41.3107-9.9932 30.5416-4.2991 68.5404-9.6065 90.0957-40.5135 21.4014-30.6372 14.8745-68.0928 9.1422-101.1694-2.7902-16.0731-6.257-36.0216-3.5437-44.7756 2.3995-7.6688 16.5575-21.6873 26.9029-31.9144 22.6386-22.4258 50.8377-50.3219 50.8377-89.5313C950.0628 442.0663 921.8627 414.1592 899.2241 391.7344zM843.4446 514.3693c-22.5627 22.2999-39.1231 39.9799-46.9072 64.847-7.7481 25.041-4.4162 49.6753 1.1802 81.9215 2.1316 12.2577 6.0432 34.7804 4.1074 41.5988-6.315 3.6395-25.5657 6.3517-36.101 7.8437-25.7406 3.5616-54.9071 7.6108-78.4191 25.4078-22.4287 17.0634-34.1653 42.6431-45.553 67.4902-4.5141 9.8583-12.4921 27.2685-18.3393 34.1439-7.3423-2.2095-21.2875-10.0132-30.3517-15.0858-23.1443-12.9752-49.3686-27.6942-79.3096-27.6942-29.9799 0-56.2602 14.757-79.6204 27.8671-8.8114 4.9397-22.7355 12.7254-30.0179 14.9329-5.8503-6.8773-13.8492-24.3055-18.3983-34.2608-11.3478-24.7492-23.0863-50.3299-45.65-67.4902-23.2212-17.5841-52.2338-21.6693-78.2262-25.3508-10.5153-1.452-29.6312-4.1252-36.0611-7.7457-1.9578-7.4769 1.9178-29.6319 4.0654-41.9845 5.5585-32.0912 8.8903-56.7635 1.0473-81.8245-7.6891-24.5554-24.2286-42.2374-46.8122-64.6052-7.4553-7.397-27.3066-27.0357-27.3066-33.1365 0-6.0779 19.8524-25.7296 27.3066-33.1066 21.8471-21.5924 39.1611-40.0678 46.8122-64.6242 7.863-25.089 4.5121-49.7613-1.1043-82.0644-2.1296-12.2777-6.0611-34.8474-4.1254-41.6837 6.332-3.6605 25.6037-6.3437 36.218-7.8257 25.7386-3.6016 54.9451-7.6888 78.2043-25.3508 22.4857-17.0335 34.2042-42.5881 45.65-67.5202 4.5321-9.8663 12.512-27.2875 18.3603-34.1818 7.3813 2.2175 21.3234 10.0402 30.1148 14.9808 23.2042 13.0232 49.4855 27.7802 79.5434 27.7802 29.9999 0 56.3022-14.747 79.5804-27.7902 8.7914-4.9397 22.7375-12.7633 30.0799-14.9808 5.8463 6.9033 13.8252 24.3055 18.3393 34.1818 11.3878 24.8072 23.1443 50.4668 45.6879 67.5302 23.3362 17.682 52.5056 21.7592 78.2043 25.3508 10.5173 1.471 29.6332 4.1552 36.105 7.7757 1.9138 7.5439-1.9398 29.6319-4.0494 41.7547-5.5785 32.1372-8.9283 56.8285-1.1243 81.9255 7.7091 24.7412 25.0621 43.2167 46.8692 64.7341 7.4573 7.395 27.2896 27.0357 27.2896 33.1145C870.7332 487.3436 850.9208 506.9723 843.4446 514.3693z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jianli17" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M736.142222 731.591111 287.857778 731.591111c-12.515556 0-22.755556 10.24-22.755556 22.755556 0 12.515556 10.24 22.755556 22.755556 22.755556l448.284444 0c12.515556 0 22.755556-10.24 22.755556-22.755556C758.897778 741.831111 748.657778 731.591111 736.142222 731.591111L736.142222 731.591111zM265.102222 428.942222 265.102222 428.942222c0 12.515556 10.24 22.755556 22.755556 22.755556l448.284444 0c12.515556 0 22.755556-10.24 22.755556-22.755556 0-12.515556-10.24-22.755556-22.755556-22.755556L287.857778 406.186667C275.342222 406.186667 265.102222 416.426667 265.102222 428.942222L265.102222 428.942222zM939.804444 300.373333 939.804444 300.373333 659.911111 21.617778c-6.826667-6.826667-15.928889-11.377778-27.306667-11.377778L176.355556 10.24c-28.444444 0-54.613333 11.377778-72.817778 29.582222C85.333333 60.302222 72.817778 85.333333 72.817778 113.777778l0 796.444444c0 28.444444 11.377778 54.613333 30.72 72.817778l0 0c18.204444 18.204444 44.373333 30.72 71.68 30.72l671.288889 0c27.306667 0 53.475556-11.377778 71.68-29.582222l0-1.137778 0 0c19.342222-18.204444 30.72-44.373333 30.72-72.817778L948.906667 327.68C951.182222 318.577778 946.631111 308.337778 939.804444 300.373333L939.804444 300.373333zM656.497778 126.293333 656.497778 126.293333l177.493333 177.493333-136.533333 0c-10.24 0-21.617778-4.551111-29.582222-11.377778l0-1.137778c-7.964444-6.826667-11.377778-17.066667-11.377778-28.444444L656.497778 126.293333 656.497778 126.293333zM873.813333 910.222222 873.813333 910.222222c0 6.826667-2.275556 13.653333-7.964444 18.204444l0 0c-4.551111 4.551111-11.377778 6.826667-18.204444 6.826667l-671.288889 0c-6.826667 0-13.653333-2.275556-18.204444-6.826667l0 0c-4.551111-4.551111-7.964444-11.377778-7.964444-18.204444L150.186667 113.777778c0-6.826667 2.275556-13.653333 7.964444-18.204444 4.551111-4.551111 11.377778-7.964444 18.204444-7.964444l433.493333 0 0 176.355556c0 23.893333 9.102222 44.373333 23.893333 60.302222l1.137778 1.137778c15.928889 15.928889 37.546667 26.168889 61.44 26.168889l176.355556 0L872.675556 910.222222 873.813333 910.222222zM736.142222 568.888889 736.142222 568.888889 287.857778 568.888889c-12.515556 0-22.755556 10.24-22.755556 22.755556 0 12.515556 10.24 22.755556 22.755556 22.755556l448.284444 0c12.515556 0 22.755556-10.24 22.755556-22.755556C758.897778 579.128889 748.657778 568.888889 736.142222 568.888889L736.142222 568.888889z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-jihui" viewBox="0 0 1048 1024">' +
    '' +
    '<path d="M12.8 499.2l58.88 30.72c0 0 25.6 15.36 40.96-12.8L256 199.68c0 0 12.8-28.16-7.68-40.96L184.32 128c0 0-20.48-12.8-33.28 12.8 0 10.24-148.48 322.56-148.48 322.56S-7.68 488.96 12.8 499.2L12.8 499.2zM970.24 529.92l58.88-28.16c0 0 28.16-12.8 15.36-40.96L896 145.92c0 0-12.8-28.16-35.84-17.92l-64 33.28c0 0-20.48 10.24-10.24 35.84 7.68 7.68 151.04 320 151.04 320S949.76 540.16 970.24 529.92L970.24 529.92zM153.6 529.92 174.08 486.4l69.12 92.16c0 0 46.08-10.24 61.44 17.92 0 0 15.36 17.92 7.68 51.2 0 0 10.24 7.68 10.24 10.24 0 0 30.72-7.68 48.64 15.36 0 0 17.92 15.36 15.36 40.96 0 0 12.8 5.12 15.36 12.8 0 0 30.72-7.68 46.08 10.24 0 0 17.92 17.92 17.92 38.4l28.16 20.48c0 0 25.6 2.56 30.72 23.04l25.6 20.48c0 0 40.96 17.92 43.52-25.6l-94.72-76.8c0 0-10.24-30.72 23.04-25.6l143.36 104.96c0 0 23.04 10.24 38.4-12.8 0 0 12.8-20.48-5.12-40.96L542.72 652.8c0 0-12.8-30.72 20.48-28.16l179.2 133.12c0 0 25.6 10.24 35.84-10.24 0 0 15.36-20.48 0-40.96l-197.12-151.04c0 0-12.8-35.84 25.6-25.6l204.8 151.04c0 0 30.72 10.24 43.52-15.36 0 0 17.92-28.16-5.12-51.2L560.64 350.72c0 0-53.76-25.6-84.48 28.16 0 0-5.12 92.16-102.4 107.52 0 0-66.56-5.12-51.2-51.2 0 0 20.48-25.6 17.92-84.48 0 0 2.56-40.96 28.16-74.24l-104.96 0L286.72 227.84l156.16 0c0 0 64-38.4 112.64-35.84 0 0 64 2.56 79.36 12.8 0 0 84.48 28.16 122.88 20.48L901.12 532.48l-23.04 53.76c0 0 40.96 43.52 10.24 97.28-7.68 17.92-30.72 35.84-66.56 35.84 0 0 5.12 35.84-20.48 56.32 0 0-17.92 25.6-61.44 17.92 0 0 2.56 30.72-25.6 53.76 0 0-35.84 30.72-89.6-7.68 0 0-7.68 35.84-51.2 43.52 0 0-30.72 5.12-48.64-12.8 0 0-33.28 64-79.36 28.16 0 0-30.72-25.6-7.68-61.44 0 0-40.96 66.56-87.04 15.36 0 0-25.6-20.48-2.56-64 0 0-38.4 43.52-79.36 5.12 0 0-28.16-23.04-5.12-69.12 0 0-38.4 48.64-84.48 2.56 0 0-17.92-17.92-7.68-58.88l43.52-61.44L153.6 529.92 153.6 529.92zM153.6 529.92"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yijianfankui" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M224.958518 832.829006c1.619894 0.019443 3.263323 0.032746 4.948709 0.032746L224.958518 832.829006zM718.193129 832.827983l-5.048993 0.033769C714.864314 832.861752 716.54049 832.848449 718.193129 832.827983zM835.426157 508.792958c-22.331611 0-40.431851 18.10024-40.431851 40.431851l0.236384 208.647017c-0.822738 58.422597-14.802124 74.179466-77.037561 74.956156l76.533071-0.508583 0.50449-74.372871 0.084934 74.924433-646.88199 0.326435 0-0.868787 76.524884 0.50142c-56.636928-0.690732-73.356728-13.760398-76.555583-60.011792l-0.276293-543.218002 0.917906 37.165458c0-59.557444 10.295484-77.908394 65.110927-80.516802l540.982078-0.311085c22.329565 0 40.429805-18.10024 40.429805-40.429805s-18.10024-40.431851-40.429805-40.431851l-614.617146 0.350994c-40.707121 3.770883-72.6486 37.705763-73.282027 79.249949L67.573002 840.413751c3.821025 41.108257 38.394449 73.28919 80.497359 73.28919l42.960441 0 0 0.336668 560.990784-0.285502 0-0.052189 42.958394 0c44.661176 0 80.861656-36.20355 80.861656-80.866772l0-40.429805 0.290619 0-0.277316-243.181555C875.855962 526.894222 857.755722 508.792958 835.426157 508.792958zM148.105153 186.286754l25.457812-0.014326-25.457812 0.166799L148.105153 186.286754zM940.507424 199.941751c-21.974477-21.972431-57.603953-21.972431-79.576383 0L406.02948 656.835689c-21.972431 21.972431-21.972431 57.603953 0 79.576383 21.976524 21.974477 57.605999 21.974477 79.57843 0l454.900537-456.890868C962.481901 257.547751 962.481901 221.919299 940.507424 199.941751z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-duizhangdan" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M892.77019 85.127819 334.361207 85.127819c-36.178991 0-65.614393 29.434379-65.614393 65.614393l0 515.850701c0 37.134759-0.118704 73.699536-0.23536 104.543008-0.101307 14.996552-0.094144 30.227442-0.088004 44.955888l0.00307 11.017938c0 20.465101-10.104125 43.63173-27.027563 61.9704-18.34788 19.882839-41.35385 30.832216-64.780399 30.832216-51.17145 0-92.802616-41.631166-92.802616-92.801593L83.815941 534.61916l0-37.268812c0-26.0237 21.171182-47.194882 47.194882-47.194882l71.377654 0c5.086855 0 9.209756-4.122901 9.209756-9.209756s-4.122901-9.209756-9.209756-9.209756l-71.377654 0c-36.178991 0-65.614393 29.434379-65.614393 65.614393l0 37.268812 0 292.489564c0 61.327764 49.894364 111.221104 111.222127 111.221104l140.828422 0 70.624501 0 504.699734 0c36.178991 0 65.614393-29.434379 65.614393-65.61337L958.385607 150.741189C958.385607 114.562199 928.950204 85.127819 892.77019 85.127819zM939.966095 872.716458c0 26.022677-21.171182 47.193859-47.194882 47.193859L388.07148 919.910317l-70.624501 0-83.601046 0c7.469112-5.120624 14.546298-11.250228 21.090341-18.340717 19.981077-21.651113 31.91078-49.487088 31.91078-74.461899l-0.00307-11.024078c-0.00614-14.696724-0.013303-29.892821 0.088004-44.851511 0.116657-30.888498 0.23536-67.474764 0.23536-104.640222L287.167349 150.742213c0-26.0237 21.171182-47.194882 47.194882-47.194882l558.410006 0c26.0237 0 47.194882 21.171182 47.194882 47.194882L939.967118 872.716458z"  ></path>' +
    '' +
    '<path d="M795.757692 320.826959 428.653757 320.826959c-5.086855 0-9.209756 4.122901-9.209756 9.209756s4.122901 9.209756 9.209756 9.209756L795.757692 339.246471c5.086855 0 9.209756-4.122901 9.209756-9.209756S800.843524 320.826959 795.757692 320.826959z"  ></path>' +
    '' +
    '<path d="M795.757692 569.553811 428.653757 569.553811c-5.086855 0-9.209756 4.122901-9.209756 9.209756s4.122901 9.209756 9.209756 9.209756L795.757692 587.973322c5.086855 0 9.209756-4.122901 9.209756-9.209756S800.843524 569.553811 795.757692 569.553811z"  ></path>' +
    '' +
    '<path d="M795.757692 430.267511 544.063253 430.267511c-5.086855 0-9.209756 4.122901-9.209756 9.209756s4.122901 9.209756 9.209756 9.209756L795.757692 448.687022c5.086855 0 9.209756-4.122901 9.209756-9.209756S800.843524 430.267511 795.757692 430.267511z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-unie611" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M128 960l0-896 768 0 0 896-384-167.008zM512 760.992l356 156 0-824-712 0 0 824zM676.992 691.008l-164.992-78.016-164.992 78.016 23.008-182.016-124-132.992 178.016-35.008 88-159.008 88 160 178.016 34.016-124 134.016zM512 582.016l130.016 60.992-18.016-143.008 98.016-106.016-140-27.008-70.016-127.008-68.992 127.008-140.992 27.008 98.016 106.016-18.016 143.008z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shouye" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M577.400141 804.313338m-28.183486 0a3.9 3.9 0 1 0 56.366972 0 3.9 3.9 0 1 0-56.366972 0Z"  ></path>' +
    '' +
    '<path d="M578.122795 915.601976m-28.183486 0a3.9 3.9 0 1 0 56.366972 0 3.9 3.9 0 1 0-56.366972 0Z"  ></path>' +
    '' +
    '<path d="M691.579393 919.215243m-28.183486 0a3.9 3.9 0 1 0 56.366972 0 3.9 3.9 0 1 0-56.366972 0Z"  ></path>' +
    '' +
    '<path d="M845.504587 377.947777c0 0-0.722653-0.722653-0.722653-0.722653L576.677488 101.894143c-18.066337-18.066337-42.636556-27.460833-67.929428-26.015526-0.722653 0-1.445307 0-2.16796 0-0.722653 0-1.445307 0-2.16796 0-25.292872-1.445307-49.863091 8.671842-67.929428 26.738179L169.100917 377.225124c0 0-0.722653 0.722653-0.722653 0.722653-27.460833 31.0741-28.183486 74.43331-28.183486 79.491884l0 403.963303c0 44.804517 36.132675 81.659845 81.659845 81.659845l218.964008 0c13.730416 0 25.292872-11.562456 25.292872-25.292872L466.111503 704.587156l39.023289 0c0.722653 0 1.445307 0 2.16796 0 0.722653 0 1.445307 0 2.16796 0l41.913903 0c13.730416 0 25.292872-11.562456 25.292872-25.292872s-11.562456-25.292872-25.292872-25.292872l-41.913903 0c-0.722653 0-1.445307 0-2.16796 0-0.722653 0-1.445307 0-2.16796 0L462.498236 654.001411c-26.015526 0-46.972477 20.956951-46.972477 46.972477l0 190.780522L221.131969 891.754411c-16.62103 0-31.0741-13.730416-31.0741-31.0741L190.057869 457.439661c0 0 0.722653-28.183486 15.175723-45.52717l267.381793-274.608327c7.949188-7.949188 18.066337-12.285109 29.628793-11.562456 1.445307 0 2.890614 0 4.335921 0 1.445307 0 2.890614 0 4.335921 0 10.839802-0.722653 21.679605 3.613267 28.90614 11.562456l267.381793 274.608327c12.285109 14.45307 15.175723 37.577982 15.175723 45.52717l0 403.963303c0 16.62103-13.730416 31.0741-31.0741 31.0741-13.730416 0-25.292872 11.562456-25.292872 25.292872s11.562456 25.292872 25.292872 25.292872c44.804517 0 81.659845-36.855328 81.659845-81.659845L872.96542 457.439661C873.688073 452.381087 872.96542 409.021877 845.504587 377.947777z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinxi" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.638673 59.98024c-232.694425 0-422.752294 189.335215-422.752293 422.752294 0 28.90614 2.890614 59.257586 9.394495 89.609033 37.577982 179.94072 177.050106 268.8271 208.124206 286.893437l58.534933 90.331686c5.058574 7.226535 13.007763 11.562456 20.956951 11.562456 3.613267 0 7.226535-0.722653 10.117149-2.16796l119.96048-53.476359c230.526464-2.890614 416.971066-191.503176 416.971066-422.752293 1.445307-233.417078-187.889908-422.752294-421.306987-422.752294z m0 794.196189c-3.613267 0-7.226535 0.722653-10.117149 2.167961L396.736768 903.316867l-50.585745-77.323924c-2.16796-3.613267-5.781228-6.503881-9.394495-8.671842-1.445307-0.722653-151.757234-80.214538-187.889908-255.096683-5.781228-26.738179-8.671842-53.476359-8.671842-79.491884 0-205.233592 166.932957-372.166549 372.166549-372.16655s372.166549 166.932957 372.166549 372.16655-167.65561 371.443896-372.889203 371.443895z" fill="" ></path>' +
    '' +
    '<path d="M415.525759 439.373324m-27.460833 0a27.460833 27.460833 0 1 0 54.921665 0 27.460833 27.460833 0 1 0-54.921665 0Z" fill="" ></path>' +
    '' +
    '<path d="M511.638673 439.373324m-27.460832 0a27.460833 27.460833 0 1 0 54.921665 0 27.460833 27.460833 0 1 0-54.921665 0Z" fill="" ></path>' +
    '' +
    '<path d="M607.751588 439.373324m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z" fill="" ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-kaixin" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M781.91108 810.094566m-27.460833 0a27.460833 27.460833 0 1 0 54.921665 0 27.460833 27.460833 0 1 0-54.921665 0Z"  ></path>' +
    '' +
    '<path d="M846.949894 735.661256m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z"  ></path>' +
    '' +
    '<path d="M891.031757 649.66549m-27.460833 0a27.460833 27.460833 0 1 0 54.921666 0 27.460833 27.460833 0 1 0-54.921666 0Z"  ></path>' +
    '' +
    '<path d="M514.529287 82.382498c-235.585039 0-427.088215 191.503176-427.088214 427.088215s191.503176 427.088215 427.088214 427.088214c69.374735 0 138.749471-17.343684 200.175018-49.863091 12.285109-6.503881 17.343684-21.679605 10.117149-33.964714-6.503881-12.285109-21.679605-17.343684-33.964714-10.117149-54.199012 28.90614-114.901905 43.35921-176.327453 43.35921-207.401553 0-376.50247-169.100917-376.50247-376.50247s169.100917-376.50247 376.50247-376.50247c207.401553 0 376.50247 169.100917 376.50247 376.50247 0 13.730416-0.722653 28.183486-2.16796 41.913902-1.445307 13.730416 8.671842 26.738179 22.402258 28.183487 13.730416 1.445307 26.738179-8.671842 28.183486-22.402259 1.445307-15.898377 2.890614-31.796754 2.890614-47.69513-0.722653-235.585039-192.225829-427.088215-427.810868-427.088215z"  ></path>' +
    '' +
    '<path d="M725.544107 627.263232c-10.839802-8.671842-26.738179-6.503881-35.410021 4.335921-42.636556 55.644319-107.675371 87.441073-177.772759 87.441073-67.206775 0-130.077629-29.628793-172.714185-80.937191-8.671842-10.839802-24.570219-12.285109-35.410021-3.613268-10.839802 8.671842-12.285109 24.570219-3.613268 35.410021 52.753705 62.870854 129.354975 99.003529 211.737474 99.003529 85.995766 0 165.48765-39.023289 218.241355-107.675371 7.949188-9.394495 5.781228-25.292872-5.058575-33.964714zM379.393084 449.490473c13.730416 0 25.292872-11.562456 25.292872-25.292872v-41.913903c0-13.730416-11.562456-25.292872-25.292872-25.292872s-25.292872 11.562456-25.292872 25.292872v41.913903c0 13.730416 10.839802 25.292872 25.292872 25.292872zM669.177135 424.197601v-41.913903c0-13.730416-11.562456-25.292872-25.292872-25.292872s-25.292872 11.562456-25.292873 25.292872v41.913903c0 13.730416 11.562456 25.292872 25.292873 25.292872s25.292872-11.562456 25.292872-25.292872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)