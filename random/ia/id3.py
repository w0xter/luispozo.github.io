def ID3(C):
    if entropía == 0:
        return 0
    else:
        P = Lista de propiedades (columnas) de la tabla C
        EM = EntropíaMedia(Pi) para cada Pi en P
        PM = Propiedad de menor valor de EM
        borrar columna PM de C
        foreach V (valor) en PM:
            Crear rama etiquetada con V
            Crear tabla C’ con las filas de C en las que PM = V
            Llamar recursivamente a ID3(C’)
            end
        end
