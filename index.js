export async function hideLoadingiframe() {
  document.getElementById("loader-line").style.display = "none";
  document.getElementById("iframeid").style.display = "block";
}

export async function klikInviewOpen(stat) {
  const courseURLs = {
    "Course-BukitAlgoritmadanMasaDepanTeknologiDatadiIndonesia":
      "https://drive.google.com/file/d/1U0Q6F7Xt0DJyeof6-Ap679-f9UBoRokr/preview",
    "Course-BelajarPrinsipPemrogramanSOLID":
      "https://drive.google.com/file/d/1i9zmAJ7v1GxGLvbziFqfUIWhz6s6w2C1/preview",
    "Course-RevouMiniCourseDigiMar":
      "https://drive.google.com/file/d/15vatBe7NXICZRl89bQUmeS4XOpuUUh3L/preview",
    "Course-RevouMiniCourseDataAnalytics":
      "https://drive.google.com/file/d/127ieaRo7ngK4_uCAjCcBUV3_27eJSt2E/preview",
    "Course-DigitalMarketing":
      "https://drive.google.com/file/d/1_NSxDgif6TRO0GrdrXcRCgfqS-AbQPb0/preview",
    "Course-DICODINGCPEDasarAWSCloud":
      "https://drive.google.com/file/d/1DMrtdUsPz2rO-G0pRl-_fpn9RWf4GGHM/preview",
    "Course-FreeCodeCamp-RWD":
      "https://drive.google.com/file/d/1c4SJ3wKq-GcgWYGxJW7-3MmpohnJID6p/preview",
    "Course-DICODING-MPDJAVA":
      "https://drive.google.com/file/d/19JcxY5sE-AkqSh_0m2SlD3Ke4GrqNAfG/preview",
    "Course-DICODING-MPDC":
      "https://drive.google.com/file/d/1h1hrAd2ILcycn5qZHAS_ssB5YM8rWN8e/preview",
    "Course-DICODING-BMABACKENDUP":
      "https://drive.google.com/file/d/1y3F4kvcjJJCfCTZf9t7rrw3KZvl0lxaw/preview",
    "Course-DICODING-BDPJS":
      "https://drive.google.com/file/d/1OhjIDEqFHXba975rCUQoK--fO3numgA7/preview",
    "Course-CODEPOLITAN-MYSQL1":
      "https://drive.google.com/file/d/1JF8yR_9m0fbNFpEM0s34B182wqVCSCc3/preview",
    "Course-CODEPOLITAN-BDJQUERY":
      "https://drive.google.com/file/d/197d-MtxsfRFAcUBLiA52YSDSVaVPf5b6/preview",
    "Course-CODEPOLITAN-MYSQLPHP":
      "https://drive.google.com/file/d/1_K0NrP11bbbPCwZaFIH_B_qhy1iAH8TE/preview",
    "Course-DICODING-BDGDGIT":
      "https://drive.google.com/file/d/1ModQUzqIVIV4yPoY3TrA6tNG66rtzhaa/preview",
    "Course-FreeCodeCamp-JADS":
      "https://drive.google.com/file/d/1C3VB_d_M3Pe36XzLx6tKfqu0zYdy-BZL/preview",
    "Course-DICODING-BDSSQL":
      "https://drive.google.com/file/d/1oNWQpOGdZkiL2Q-cFAekXAoM3oWjal1J/preview",
    "Course-DICODING-BDPWEB":
      "https://drive.google.com/file/d/11DkLtQD5MO8rvHxnCw-N9x8S1FTZ3E_P/preview",
    "Course-CODEPOLITAN-BOOTSTRAPF":
      "https://drive.google.com/file/d/1Vr95r_vXvciXxvl0g7OTHVBYw0bAVBgf/preview",
    "Course-CODEPOLITAN-KBJASYNC":
      "https://drive.google.com/file/d/1kVAeTjXfnePv79kBfVFk3u0yzuEZq42h/preview",
    "Course-CODEPOLITAN-BGITUP":
      "https://drive.google.com/file/d/1yPqtRwwVUwVM-BoC8cBCwaMbpYA9vMQ9/preview",
    "Course-CODEPOLITAN-BJSDD":
      "https://drive.google.com/file/d/12yl3WfKcBRV4Cy9uH8wocoYI9tzNzSF7/preview",
    "Course-CODEPOLITAN-HTMLANDCSSD":
      "https://drive.google.com/file/d/1dU2yQxwJQgBB78_bi4gHguHEMhGwyG3o/preview",
    "Course-ALIBABACLOUD-GENAI":
      "https://drive.google.com/file/d/1d_TWZJmy6BDSOdnj-kX_U1Y-GVKip5C8/preview",
    "Course-ALIBABACLOUD-OAMACS":
      "https://drive.google.com/file/d/1L2AQF0e_P395Rz8KzTKDZdUN-QFAqzBj/preview",
    "Course-ALIBABACLOUD-OAMARDOTC":
      "https://drive.google.com/file/d/1dYj4EM9YPRU_6tMmEsrHphWqD4qnby68/preview",
    "Course-ALIBABACLOUD-HLTWLB":
      "https://drive.google.com/file/d/13vEX7fYdIlbR9tSBq53hys8kTPMWjg5a/preview",
    "Course-ALIBABACLOUD-OAMOSOTC":
      "https://drive.google.com/file/d/108nKVP4h9T8ByqQGae_2XBPYqGGsWGAV/preview",
    "Course-ALIBABACLOUD-UCRFATBR":
      "https://drive.google.com/file/d/1dRp6HMiW0vJqHfncnwWwKrbL5y9xOdnw/preview",
    "Course-ALIBABACLOUD-UOSSTPASW":
      "https://drive.google.com/file/d/1QPLFHxBmj6O2S_DBaIt2RGncFQ2nOkGC/preview",
    "Course-ALIBABACLOUD-MFB-BQ":
      "https://drive.google.com/file/d/14Hy6gmagmstomaTIkDZ_opl7cNRPzZkZ/preview",
    "Course-ALIBABACLOUD-UECSTCADW":
      "https://drive.google.com/file/d/1WMKOu0N9_3iZoK0bqrl-DPmk8me7HLk2/preview",
    "Course-ALIBABACLOUD-ACNS":
      "https://drive.google.com/file/d/1Tj2hO24WGlKIaIMsUAbhUfrFATw79Bq8/preview",
    "Course-ALIBABACLOUD-MDCAO":
      "https://drive.google.com/file/d/1kOvCFUUpNtP1N4tfEBm_WoWXu0olKvsv/preview",
    "Course-GREATLEARNING-FED-CSS":
      "https://drive.google.com/file/d/1tRXuxoDDbSPpu8HOXaXz3q9199i0TmyJ/preview",
    "Course-GREATLEARNING-PHPFB":
      "https://drive.google.com/file/d/1TKMc9liPLz-QTM0bduTMczUUYN88yDlV/preview",
    "Course-ALIBABACLOUD-CPSO":
      "https://drive.google.com/file/d/1uODVIy6V7r5ru3VFFrnUXgUMjT5tkkV5/preview",
    "Course-ALIBABACLOUD-IWVPC":
      "https://drive.google.com/file/d/1yvIdvA6L3PeO_xhjhGX83LLqrGwTt563/preview",
    "Course-ALIBABACLOUD-NSC":
      "https://drive.google.com/file/d/1-PRYAuH1KWTJb7NKjPmyZOpyD1pmj-j4/preview",
    "Course-ALIBABACLOUD-UACCDNTAYCG":
      "https://drive.google.com/file/d/1CRzohJA7aJB023Rii-Yni48ouCngytpN/preview",
    "Course-ALIBABACLOUD-GA-NASTO":
      "https://drive.google.com/file/d/1owaX33XsFzOJTildUxmsZNbjgmVlEHEz/preview",
    "Course-ALIBABACLOUD-ACCACPCPT":
      "https://drive.google.com/file/d/1zfu5BwIKP0JU9kdLc9fDAfhAQk1FhylB/preview",
    "Course-SOLOLEARN-WB":
      "https://drive.google.com/file/d/1t5ZEKPUctaJKBQ5PsKSG5fID1BQ-Bl5M/preview",
    "Course-CANVA-R50D":
      "https://drive.google.com/file/d/1kT16-ndrM8QPklPvfidF3jBS5hH3vWDT/preview",
    "Course-DTS-ACP":
      "https://drive.google.com/file/d/1yFH90SU_O8RMG60BtOUkZ_HN5Kla7EFz/preview",
    "Course-DICODING-DFTDJSEEKER":
      "https://drive.google.com/file/d/16dy9KQg6J7VxxKC8vqM4ttR_phMalm2M/preview",
    "Course-DICODING-BMFRONTENDWUP":
      "https://drive.google.com/file/d/1-d_ZgH4BKhsnixwxx_YkNqAU2SOAFcqz/preview",
    "Course-SOLOLEARN-SQLI":
      "https://drive.google.com/file/d/1JPhZAz0adtoJdkypd-cVtcvsGkpqcmBz/preview",
    "Course-DICODING-MPDPYTHON":
      "https://drive.google.com/file/d/1AtezWUtXv65hFB88Y3M3tFXv8U8LycQa/preview",
    "Course-DICODING-BDVISDATA":
      "https://drive.google.com/file/d/162ST05SAwcdVpbOclv5G7cLnyvNO5-9x/preview",
    "Course-SOLOLEARN-ITO":
      "https://drive.google.com/file/d/1WLZcOQ6gMkUx5_ZDsPdY5H5_Owt6wC1W/preview",
    "Course-DICODING-BMACHINELEARNING":
      "https://drive.google.com/file/d/1QPCMatbEUl7GAoZ3bhiSc5rwkVrSr_T2/preview",
  };

  if (stat in courseURLs) {
    const url = courseURLs[stat];
    $(".inview_frame").html(
      `<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid" src="${url}" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>`
    );
  } else if (stat == "ManajemenData") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><div id="jarvis-circle-wrapper"><div id="jarvis-circle-inner"></div></div><div class="b-chart-strip1"></div><div class="b-chart-strip2"></div><div class="b-chart"><canvas id="chart-ManajemenData"></canvas></div><div class="befortext"><span>Average</span><span>89%</span><div class="b-text">Mampu membangun, merancang dan mengembangkan sebuah sistem software dan juga Aplikasi Berbasis WEB. Melakukan analisis secara menyeluruh pada sistem komputer. Mengelola, merapikan data-data agar sumber data tetap aktual. Pelayanan konsultasi di bidang IT dan menyusun rancangan jaringan komputer</div></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1QGsy0iBM1f9wxaOq-G2Q2VxDF0Gh6jtR/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
    var configchartManajemenData = {
      type: "radar",
      data: {
        labels: [
          "Programmer",
          "Software Engineer",
          "System Analyst",
          "Database Adm",
          "IT Consultant",
          "Web Developer",
          "C. Network Architect",
        ],
        datasets: [
          {
            label: "MD Skills",
            data: [85, 95, 90, 88, 85, 97, 84],
            backgroundColor: "rgba(99, 211, 255, 0.2)",
            borderColor: "#00f1ff",
            pointBackgroundColor: "#00f1ff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#00f1ff",
          },
          {
            label: "",
            data: [0, 0, 0, 0, 0, 0],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scale: {
          gridLines: {
            color: ["#d4d4d4"],
          },
        },
      },
    };
    var chartMANINFO = document.getElementById("chart-ManajemenData");
    new Chart(chartMANINFO, configchartManajemenData);
  } else if (stat == "InformationTechnologyNetwork") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><div id="jarvis-circle-wrapper"><div id="jarvis-circle-inner"></div></div><div class="b-chart-strip1"></div><div class="b-chart-strip2"></div><div class="b-chart"><canvas id="chart-ITN"></canvas></div> <div class="befortext"><span>Average</span><span>90%</span><div class="b-text">Lihai membuat jaringan lokal, dan nirkabel dan juga Terampil melaksanakan prosedur perawatan serta menyelenggarakan adm sistem jaringan, maupun menginstal sumber daya berbagi pada jaringan</div></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1hk3Y7KyWksi3_AjZ5KJXAFZyZRk5fL9D/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
    var configchartITN = {
      type: "radar",
      data: {
        labels: [
          "Desain LAN",
          "Cable UTP & BNC",
          "Install Wireless",
          "Network resources",
          "Network administration",
          "Procedure maintenance",
        ],
        datasets: [
          {
            label: "ITN Skills",
            data: [90, 99, 91, 85, 80, 94],
            backgroundColor: "rgba(99, 211, 255, 0.2)",
            borderColor: "#00f1ff",
            pointBackgroundColor: "#00f1ff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#00f1ff",
          },
          {
            label: "",
            data: [0, 0, 0, 0, 0, 0],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scale: {
          gridLines: {
            color: ["#d4d4d4"],
          },
        },
      },
    };
    var chartITN = document.getElementById("chart-ITN");
    new Chart(chartITN, configchartITN);
  } else if (stat == "EngineringInformationSystem") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><div id="jarvis-circle-wrapper"><div id="jarvis-circle-inner"></div></div><div class="b-chart-strip1"></div><div class="b-chart-strip2"></div><div class="b-chart"><canvas id="chart-EIS"></canvas></div><div class="befortext"><span>Average</span><span>98%</span><div class="b-text">Cakap dalam membuat algoritma, menulis atau membuat dokumen kode pemograman yang terstruktur dan Tangkas dalam mengoprasikan aplikasi basis data</div></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1HQkg9rgbD6PTdDxEAE8i0Ae5cCoR4ndc/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
    var configchartEIS = {
      type: "radar",
      data: {
        labels: [
          "Algorithm",
          "Write basic programs",
          "Code documents",
          "Operate Database",
        ],
        datasets: [
          {
            label: "EIS Skills",
            data: [95, 99, 99, 98],
            backgroundColor: "rgba(99, 211, 255, 0.2)",
            borderColor: "#00f1ff",
            pointBackgroundColor: "#00f1ff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#00f1ff",
          },
          {
            label: "",
            data: [0, 0, 0, 0, 0, 0],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scale: {
          gridLines: {
            color: ["#d4d4d4"],
          },
        },
      },
    };
    var chartEIS = document.getElementById("chart-EIS");
    new Chart(chartEIS, configchartEIS);
  } else if (stat == "InformationTechnologySupport") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><div id="jarvis-circle-wrapper"><div id="jarvis-circle-inner"></div></div><div class="b-chart-strip1"></div><div class="b-chart-strip2"></div><div class="b-chart"><canvas id="chart-InformationTechnologySupport"></canvas></div> <div class="befortext"><span>Average</span><span>92%</span><div class="b-text">Mahir dalam mengidentifikasi spesifikasi, memasang perlengkapan, mengoprasikan perangkat komputer, dan melakukan instalasi jaringan serta instalasi operating system</div></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1NxNhDLUCV5uWbEkR4fvE1RN1y6GxRcY5/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
    var configchartInformationTechnologySupport = {
      type: "radar",
      data: {
        labels: [
          "Install Pheriperal",
          "PC Stand Alone",
          "Instalation Network",
          "Instalation OS",
          "Ident spec",
        ],
        datasets: [
          {
            label: "ITS Skills",
            data: [99, 99, 85, 95, 80],
            backgroundColor: "rgba(99, 211, 255, 0.2)",
            borderColor: "#00f1ff",
            pointBackgroundColor: "#00f1ff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#00f1ff",
          },
          {
            label: " Skills",
            data: [0, 0, 0, 0, 0, 0],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scale: {
          gridLines: {
            color: ["#d4d4d4"],
          },
        },
      },
    };
    var chartInformationTechnologySupport = document.getElementById(
      "chart-InformationTechnologySupport"
    );
    new Chart(
      chartInformationTechnologySupport,
      configchartInformationTechnologySupport
    );
  } else if (stat == "MircrosoftOfficeSpecialist") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><div id="jarvis-circle-wrapper"><div id="jarvis-circle-inner"></div></div><div class="b-chart-strip1"></div><div class="b-chart-strip2"></div><div class="b-chart"><canvas id="chart-MOS"></canvas></div><div class="befortext"><span>Average</span><span>85%</span><div class="b-text">Menguasai fitur dan fungsionalitas lengkap Microsoft Office, mulai dari Excel, Word, Power Point, Publisher, Acces dan telah memiliki sertifikasi yang dikeluarkan oleh Certiport, Kredensial yang diakui secara global</div></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1BnZ9ukVQJ5SsxHTzhsDi92VbJ5gWT6Km/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
    var configchartMOS = {
      type: "radar",
      data: {
        labels: [
          "Ms. Word",
          "Ms. Excel",
          "Ms. Power Point",
          "Ms. Acces",
          "Ms. Publisher",
          "Ms. Project",
        ],
        datasets: [
          {
            label: "MOS Skills",
            data: [99, 71, 99, 95, 95, 55],
            backgroundColor: "rgba(99, 211, 255, 0.2)",
            borderColor: "#00f1ff",
            pointBackgroundColor: "#00f1ff",
            pointBorderColor: "#fff",
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "#00f1ff",
          },
          {
            label: "",
            data: [0, 0, 0, 0, 0, 0],
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        scale: {
          gridLines: {
            color: ["#d4d4d4"],
          },
        },
      },
    };
    var chartMOS = document.getElementById("chart-MOS");
    new Chart(chartMOS, configchartMOS);
  } else if (stat == "LihatIjazah") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1QGsy0iBM1f9wxaOq-G2Q2VxDF0Gh6jtR/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "KeteranganLulus") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1LohMqstmsX4ujx74yaJbg41SEOSWG1CD/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "CALLFORPAPER") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1LLkm3GmxhXWPbo2HuawRnJV7ab2rW5Zi/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "TOEIC") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1-18cFhFNAmJlE1JQQ_iwgzEHp59fj6Qu/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "ORACLE") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1fBrfSLDw3EeQRQ-HsO1dFSN4lApeX3py/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "EKSIS2017") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1BA9KvDkAmDQhx_WclroQ2R0RaVKV3_BM/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "PICKS2016") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1sm63YoLQsDy1ob1p_DVph5H0XOClyONJ/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "LihatIjazah-MA") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1IUCOOv-J-YGX-1Nnw6-bwwUwwev7nZig/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "SKHUN-MA") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1RCI7ExZ8wjo4uFACuYElP3OdREliJsKD/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "LihatIjazah-MTS") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1IjC-DrjqskWzDMl0tq4xjEmyKnFHjSMi/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "SKHUN-MTS") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1Us-d3ifnRyV-TsmOIpVH10lnv3-vYIMo/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "SKHUN-PIKSI") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1LlKhAkB_-u65SAaJEre7n2mxDYmQWrA7/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "Pengantar") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1ZepM4Xno5bMo27X2-k80565bCzojTFpf/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "Absen") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/16eHkXyKMTDY1IoF8hXu8fzE5CbUvfnTC/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "SuketKerjaRAP") {
    $(".inview_frame").html(
      '<div id="loader-line"></div><iframe onload="hideLoadingiframe()" id="iframeid"   src="https://drive.google.com/file/d/1mNju3j0v5skbLDWu_nFG7PcURBsFyWRF/preview" allowfullscreen="true" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" width="100%" height="360"></iframe></div>'
    );
  } else if (stat == "portofolio-webanime") {
    $(".inview_frame").append('<iframe  src="portofolio-webanime.html" />');
  } else if (stat == "portofolio-websiteRAP") {
    $(".inview_frame").append('<iframe  src="portofolio-websiteRAP.html" />');
  } else if (stat == "portofolio-inventarisRAP") {
    $(".inview_frame").append(
      '<iframe  src="portofolio-inventarisRAP.html" />'
    );
  } else if (stat == "portofolio-cashflow") {
    $(".inview_frame").append('<iframe  src="portofolio-cashflow.html" />');
  } else if (stat == "portofolio-manktr") {
    $(".inview_frame").append('<iframe  src="portofolio-manktr.html" />');
  } else if (stat == "portofolio-osengmercon") {
    $(".inview_frame").append('<iframe  src="portofolio-osengmercon.html" />');
  } else if (stat == "portofolio-webcommandcentre") {
    $(".inview_frame").append(
      '<iframe  src="portofolio-webcommandcentre.html" />'
    );
  } else if (stat == "portofolio-manpumping") {
    $(".inview_frame").append('<iframe  src="portofolio-manpumping.html" />');
  } else if (stat == "portofolio-rabp") {
    $(".inview_frame").append('<iframe  src="portofolio-rabp.html" />');
  }
  $("#in_view_form").css("display", "block");
  $("#in_view_form").animate({
    top: "0%",
  });
  let iframeid = document.getElementById("iframeid");
  iframeid.onload = function () {
    hideLoadingiframe();
  };
}
